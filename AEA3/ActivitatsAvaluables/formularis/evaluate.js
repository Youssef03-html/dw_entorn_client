window.addEventListener("DOMContentLoaded", function () {

  function validar(inputId, checkId, regex) {
    const input = document.getElementById(inputId); // Camp de text
    const check = document.getElementById(checkId); // Icono

    input.addEventListener("keyup", function () {
      if (regex.test(input.value.trim())) {
        check.style.display = "inline";
      } else {
        check.style.display = "none";
      }
    });
  }

  // Ex1: DD-MM-AAAA (validació bàsica de dies/mesos)
  validar(
    "inputEx1",
    "checkEx1",
    /^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[0-2])\-\d{4}$/
  );

  // Ex2: DD-MM-AAAA o DD/MM/AAAA
  validar(
    "inputEx2",
    "checkEx2",
    /^(0[1-9]|[12][0-9]|3[01])([\-\/])(0[1-9]|1[0-2])\2\d{4}$/
  );

  // Ex3: Telèfon Espanya (diversos formats)
  validar(
    "inputEx3",
    "checkEx3",
    /^(\d{9}|\d{3}\s\d{3}\s\d{3}|\d{2}\s\d{3}\s\d{2}\s\d{2})$/
  );

  // Ex4: Telèfon + codi internacional opcional
  validar(
    "inputEx4",
    "checkEx4",
    /^(\+034\s?)?(\d{9}|\d{3}\s\d{3}\s\d{3}|\d{2}\s\d{3}\s\d{2}\s\d{2})$/
  );

  // Ex5: Contrasenya (mínim 8 caràcters, lletres i números)
  validar(
    "inputEx5",
    "checkEx5",
    /^(?=.*[A-Za-zÀ-ÿ])(?=.*\d)[A-Za-zÀ-ÿ\d]{8,}$/
  );

});