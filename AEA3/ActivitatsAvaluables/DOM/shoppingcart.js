$(function () {
  const cartPanel = $('.col-md-8.col-sm-12').first();
  const productRows = cartPanel.children('.row.my-3');
  const badge = cartPanel.find('.badge');
  const subtotalText = $('.list-group-item').eq(0).find('.text-muted');
  const taxText = $('.list-group-item').eq(1).find('.text-muted');
  const shippingText = $('.list-group-item').eq(2).find('.text-muted');
  const promoRow = $('.list-group-item.no-apply');
  const promoText = promoRow.find('.text-success');
  const totalText = $('.list-group-item').eq(4).find('strong');
  const promoInput = $('.card.p-2 input.form-control');
  const redeemBtn = $('.card.p-2 button.btn-secondary');
  const checkoutBtn = $('.btn.btn-lg.btn-block.btn-success');
  const modal = $('#payment_modal');
  const modalTitle = modal.find('.modal-title');
  const modalBody = modal.find('.modal-body');

  let promoApplied = false;
  const promoCode = 'PROMO1000';
  const promoDiscount = 5;
  const taxRate = 0.05;
  const shippingCost = 7;

  function parseEuro(value) {
    return parseFloat(String(value).replace(',', '.').replace(/[^\d.-]/g, '')) || 0;
  }

  function formatEuro(value) {
    const rounded = Math.round(value * 100) / 100;
    if (Number.isInteger(rounded)) {
      return rounded + '€';
    }
    return rounded.toFixed(2).replace('.', ',') + '€';
  }

  function updateCart() {
    let subtotal = 0;
    let itemTypes = 0;

    productRows.each(function () {
      const row = $(this);
      const input = row.find('input[type="number"]');
      let qty = parseInt(input.val(), 10);

      if (isNaN(qty) || qty < 1) {
        qty = 1;
        input.val(1);
      }

      const unitPrice = row.data('unitPrice') !== undefined ? row.data('unitPrice') : parseEuro(row.find('.preu-unitari').text());
      row.data('unitPrice', unitPrice);

      const lineTotal = unitPrice * qty;
      row.find('.preu-producte').text(formatEuro(lineTotal));
      subtotal += lineTotal;
      itemTypes += 1;
    });

    const discount = promoApplied ? promoDiscount : 0;
    const discountedSubtotal = Math.max(subtotal - discount, 0);
    const tax = discountedSubtotal * taxRate;
    const total = discountedSubtotal + tax + shippingCost;

    badge.text(itemTypes);
    subtotalText.text(formatEuro(subtotal));
    taxText.text(Math.round(taxRate * 100) + '%');
    shippingText.text(formatEuro(shippingCost));
    promoText.text('-' + promoDiscount + '€');
    totalText.text(formatEuro(total));
    checkoutBtn.prop('disabled', itemTypes === 0);
  }

  function showPromo() {
    promoRow.stop(true, true).slideDown(300);
  }

  function hidePromo() {
    promoRow.stop(true, true).slideUp(300);
  }

  productRows.each(function () {
    const row = $(this);
    row.data('unitPrice', parseEuro(row.find('.preu-unitari').text()));
  });

  cartPanel.on('input change', 'input[type="number"]', function () {
    updateCart();
  });

  cartPanel.on('click', 'button.btn-outline-danger', function () {
    const row = $(this).closest('.row.my-3');
    row.stop(true, true).slideUp(300, function () {
      $(this).remove();
      updateCart();
    });
  });

  redeemBtn.on('click', function () {
    const code = promoInput.val().trim().toUpperCase();

    if (code === promoCode) {
      if (promoApplied) {
        return;
      }
      promoApplied = true;
      showPromo();
      updateCart();
      return;
    }

    if (promoApplied) {
      promoApplied = false;
      hidePromo();
      updateCart();
    }
  });

  checkoutBtn.on('click', function (e) {
    if ($(this).prop('disabled')) {
      e.preventDefault();
      return;
    }

    const subtotal = parseEuro(subtotalText.text());
    const discount = promoApplied ? promoDiscount : 0;
    const discountedSubtotal = Math.max(subtotal - discount, 0);
    const tax = discountedSubtotal * taxRate;
    const total = discountedSubtotal + tax + shippingCost;
    const itemTypes = parseInt(badge.text(), 10) || 0;

    modalTitle.text('Purchase details');
    modalBody.html(
      '<div class="table-responsive">' +
        '<table class="table table-sm mb-0">' +
          '<tr><td>Productes</td><td class="text-right">' + itemTypes + '</td></tr>' +
          '<tr><td>Subtotal</td><td class="text-right">' + formatEuro(subtotal) + '</td></tr>' +
          (promoApplied ? '<tr><td>Descompte</td><td class="text-right">-' + promoDiscount + '€</td></tr>' : '') +
          '<tr><td>Tax</td><td class="text-right">' + Math.round(taxRate * 100) + '%</td></tr>' +
          '<tr><td>Shipping</td><td class="text-right">' + formatEuro(shippingCost) + '</td></tr>' +
          '<tr><td><strong>Total</strong></td><td class="text-right"><strong>' + formatEuro(total) + '</strong></td></tr>' +
        '</table>' +
      '</div>' +
      '<p class="mb-0">Ves a la passarel·la de pagament per completar la compra.</p>'
    );

    modal.modal('show');
  });

  updateCart();
});