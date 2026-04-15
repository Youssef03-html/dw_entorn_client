# 02. Eventos y formularios

## 1) Qué es un evento

Un evento es una acción que ocurre en la página y que JavaScript puede detectar.

### Eventos muy comunes
- `click` → pulsar un botón o un elemento
- `input` → escribir dentro de un campo
- `keyup` → soltar una tecla
- `change` → cambiar una opción o valor
- `submit` → enviar un formulario

### Idea clave
JavaScript escucha el evento y ejecuta una función cuando ocurre.

---

## 2) `addEventListener`

Es la forma recomendada para escuchar eventos.

### Estructura básica
```javascript
elemento.addEventListener("evento", funcion);
```

### Ejemplo 1: botón con click

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Eventos</title>
</head>
<body>
  <button id="boton">Pulsa aquí</button>
  <p id="mensaje"></p>

  <script>
    const boton = document.getElementById("boton");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function () {
      // Cambia el texto cuando se pulsa el botón
      mensaje.textContent = "Has pulsado el botón";
    });
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `click`: se activa al pulsar.
- `addEventListener()`: conecta el evento con una función.
- `textContent`: cambia el texto visible.

---

## 3) Eventos de teclado y escritura

### Ejemplo 2: `input`

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre">
<p id="vista"></p>

<script>
  const nombre = document.getElementById("nombre");
  const vista = document.getElementById("vista");

  nombre.addEventListener("input", function () {
    // Muestra en tiempo real lo que se escribe
    vista.textContent = "Estás escribiendo: " + nombre.value;
  });
</script>
```

### Qué hace cada cosa
- `input`: se dispara cada vez que cambia el valor.
- `.value`: devuelve lo que hay escrito en el campo.

### Ejemplo 3: `keyup`

```html
<input type="text" id="texto">
<p id="info"></p>

<script>
  const texto = document.getElementById("texto");
  const info = document.getElementById("info");

  texto.addEventListener("keyup", function (event) {
    // Muestra la tecla que se ha soltado
    info.textContent = "Has soltado la tecla: " + event.key;
  });
</script>
```

### Qué hace cada cosa
- `keyup`: se activa al soltar una tecla.
- `event.key`: indica qué tecla se ha pulsado.

---

## 4) Eventos de formularios

### Ejemplo 4: `submit`

```html
<form id="formulario">
  <input type="text" id="nombre">
  <button type="submit">Enviar</button>
</form>

<p id="mensaje"></p>

<script>
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", function (event) {
    // Evita que el formulario recargue la página
    event.preventDefault();

    if (nombre.value.trim() === "") {
      mensaje.textContent = "El nombre no puede estar vacío";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "Formulario correcto";
      mensaje.style.color = "green";
    }
  });
</script>
```

### Qué hace cada cosa
- `submit`: se activa al enviar el formulario.
- `preventDefault()`: bloquea el comportamiento por defecto.
- `trim()`: quita espacios sobrantes.

---

## 5) `change`

Se usa mucho en `select`, checkbox y radios.

### Ejemplo 5: desplegable

```html
<label for="pais">País:</label>
<select id="pais">
  <option value="">Elige uno</option>
  <option value="es">España</option>
  <option value="fr">Francia</option>
</select>
<p id="resultado"></p>

<script>
  const pais = document.getElementById("pais");
  const resultado = document.getElementById("resultado");

  pais.addEventListener("change", function () {
    // Muestra la opción elegida
    resultado.textContent = "País elegido: " + pais.value;
  });
</script>
```

### Qué hace cada cosa
- `change`: se dispara cuando cambia el valor.
- `select.value`: devuelve la opción seleccionada.

---

## 6) `checked` para checkbox y radio

### Ejemplo 6: checkbox

```html
<label>
  <input type="checkbox" id="acepta">
  Acepto las condiciones
</label>
<p id="estado"></p>

<script>
  const acepta = document.getElementById("acepta");
  const estado = document.getElementById("estado");

  acepta.addEventListener("change", function () {
    if (acepta.checked) {
      estado.textContent = "Condiciones aceptadas";
    } else {
      estado.textContent = "Debes aceptarlas";
    }
  });
</script>
```

### Qué hace cada cosa
- `.checked`: devuelve `true` o `false`.

### Ejemplo 7: radio

```html
<label><input type="radio" name="genero" value="h"> Hombre</label>
<label><input type="radio" name="genero" value="m"> Mujer</label>
<button id="boton">Comprobar</button>
<p id="salida"></p>

<script>
  const boton = document.getElementById("boton");
  const salida = document.getElementById("salida");

  boton.addEventListener("click", function () {
    // Busca el radio marcado dentro del grupo
    const seleccionado = document.querySelector("input[name='genero']:checked");

    if (seleccionado === null) {
      salida.textContent = "No has elegido ninguna opción";
    } else {
      salida.textContent = "Has elegido: " + seleccionado.value;
    }
  });
</script>
```

### Qué hace cada cosa
- `querySelector(...:checked)`: busca el radio marcado.
- Si no hay ninguno, devuelve `null`.

---

## 7) Validación básica de formulario

### Ejemplo 8: nombre, edad y checkbox

```html
<form id="formulario">
  <p>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
  </p>

  <p>
    <label for="edad">Edad:</label>
    <input type="number" id="edad">
  </p>

  <p>
    <label>
      <input type="checkbox" id="acepta">
      Acepto las condiciones
    </label>
  </p>

  <button type="submit">Enviar</button>
</form>

<p id="mensaje"></p>

<script>
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const acepta = document.getElementById("acepta");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreValor = nombre.value.trim();
    const edadValor = parseInt(edad.value, 10);

    if (nombreValor.length < 3) {
      mensaje.textContent = "El nombre debe tener al menos 3 caracteres";
      mensaje.style.color = "red";
      return;
    }

    if (isNaN(edadValor) || edadValor < 18) {
      mensaje.textContent = "Debes tener 18 años o más";
      mensaje.style.color = "red";
      return;
    }

    if (!acepta.checked) {
      mensaje.textContent = "Debes aceptar las condiciones";
      mensaje.style.color = "red";
      return;
    }

    mensaje.textContent = "Formulario correcto";
    mensaje.style.color = "green";
  });
</script>
```

### Qué hace cada cosa
- `parseInt()`: convierte texto a número entero.
- `isNaN()`: comprueba si no es un número.
- `return`: corta la función cuando hay error.

---

## 8) Validación con regex

### Ejemplo 9: texto con letras y espacios

```html
<form id="formulario">
  <input type="text" id="nombre">
  <button type="submit">Enviar</button>
</form>
<p id="mensaje"></p>

<script>
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const mensaje = document.getElementById("mensaje");

  const patron = /^[A-Za-zÀ-ÿ\s]{3,}$/;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = nombre.value.trim();

    if (!patron.test(valor)) {
      mensaje.textContent = "El nombre no tiene un formato válido";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "Nombre correcto";
      mensaje.style.color = "green";
    }
  });
</script>
```

### Qué hace cada cosa
- `test()`: comprueba si la cadena cumple el patrón.
- `regex`: es la regla de validación.

---

## 9) Resumen rápido para examen

### Eventos más usados
```javascript
click
input
keyup
change
submit
```

### Lo más importante en formularios
```javascript
value
checked
selectedIndex
preventDefault()
```

### Validación
```javascript
trim()
parseInt()
isNaN()
regex.test()
```

## 10) Idea mental importante

Si te ponen un ejercicio de eventos o formularios, casi siempre harás esto:
- seleccionar el elemento
- escuchar el evento
- leer el valor
- comprobarlo con `if`
- mostrar un mensaje o cambiar algo en pantalla

