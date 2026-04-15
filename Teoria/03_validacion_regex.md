# 03. Validación con expresiones regulares

## 1) Qué es una expresión regular

Una expresión regular, o regex, es una regla para comprobar si un texto sigue un formato concreto.

### Idea clave
- Sirve para validar cadenas.
- Devuelve `true` o `false`.
- Se usa mucho en formularios.

### Ejemplo básico

```javascript
const patron = /^[0-9]+$/;

console.log(patron.test("123"));   // true
console.log(patron.test("abc"));   // false
```

### Qué hace cada cosa
- `/.../`: delimitadores de la regex.
- `^`: empieza por aquí.
- `$`: termina aquí.
- `[0-9]+`: uno o más números.
- `.test()`: comprueba si el texto cumple la regla.

---

## 2) Validar solo números

### Ejemplo 1: código postal de 5 cifras

```javascript
const patron = /^[0-9]{5}$/;

console.log(patron.test("08940")); // true
console.log(patron.test("8940"));  // false
```

### Qué hace cada cosa
- `{5}`: exactamente 5 repeticiones.
- Solo acepta 5 números seguidos.

---

## 3) Validar texto con letras y espacios

### Ejemplo 2: nombre y apellidos

```javascript
const patron = /^[A-Za-zÀ-ÿ\s]{3,}$/;

console.log(patron.test("Juan Pérez")); // true
console.log(patron.test("A1"));         // false
```

### Qué hace cada cosa
- `A-Za-zÀ-ÿ`: letras normales y letras con acentos.
- `\s`: espacios.
- `{3,}`: mínimo 3 caracteres.

---

## 4) Validar correo electrónico

### Ejemplo 3: correo simple

```javascript
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(patronCorreo.test("alumno@correo.com")); // true
console.log(patronCorreo.test("alumno@correo"));     // false
```

### Qué hace cada cosa
- `[^\s@]`: cualquier carácter menos espacios y `@`.
- `+`: uno o más caracteres.
- `@`: debe aparecer el símbolo arroba.
- `\.`: punto literal.

---

## 5) Validar contraseña

### Ejemplo 4: letras, números y mínimo 8 caracteres

```javascript
const patronPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

console.log(patronPassword.test("abc12345")); // true
console.log(patronPassword.test("abcdefg"));   // false
```

### Qué hace cada cosa
- `(?=.*[A-Za-z])`: debe tener al menos una letra.
- `(?=.*\d)`: debe tener al menos un número.
- `[A-Za-z\d]{8,}`: mínimo 8 caracteres formados por letras o números.

---

## 6) Validar fecha

### Ejemplo 5: fecha tipo DD-MM-AAAA

```javascript
const patronFecha = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

console.log(patronFecha.test("12-05-2024")); // true
console.log(patronFecha.test("99-99-2024")); // false
```

### Qué hace cada cosa
- `0[1-9]`: días del 01 al 09.
- `[12][0-9]`: días del 10 al 29.
- `3[01]`: días del 30 al 31.
- `(0[1-9]|1[0-2])`: meses del 01 al 12.
- `\d{4}`: cuatro números para el año.

---

## 7) Usar regex dentro de un formulario

### Ejemplo 6: validar nombre y correo

```html
<form id="formulario">
  <p>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
  </p>

  <p>
    <label for="correo">Correo:</label>
    <input type="text" id="correo">
  </p>

  <button type="submit">Enviar</button>
</form>

<p id="mensaje"></p>

<script>
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  const patronNombre = /^[A-Za-zÀ-ÿ\s]{3,}$/;
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valorNombre = nombre.value.trim();
    const valorCorreo = correo.value.trim();

    if (!patronNombre.test(valorNombre)) {
      mensaje.textContent = "El nombre no es válido";
      mensaje.style.color = "red";
      return;
    }

    if (!patronCorreo.test(valorCorreo)) {
      mensaje.textContent = "El correo no es válido";
      mensaje.style.color = "red";
      return;
    }

    mensaje.textContent = "Formulario correcto";
    mensaje.style.color = "green";
  });
</script>
```

### Qué hace cada cosa
- `trim()`: quita espacios sobrantes.
- `.test()`: comprueba si el texto cumple el patrón.
- `return`: corta la función si hay error.

---

## 8) Validar control de entrada de usuario

### Ejemplo 7: permitir solo letras

```html
<form id="formulario">
  <input type="text" id="texto">
  <button type="submit">Comprobar</button>
</form>

<p id="mensaje"></p>

<script>
  const formulario = document.getElementById("formulario");
  const texto = document.getElementById("texto");
  const mensaje = document.getElementById("mensaje");

  const patron = /^[A-Za-zÀ-ÿ\s]+$/;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = texto.value.trim();

    if (valor === "") {
      mensaje.textContent = "El campo no puede estar vacío";
      mensaje.style.color = "red";
      return;
    }

    if (!patron.test(valor)) {
      mensaje.textContent = "Solo se permiten letras y espacios";
      mensaje.style.color = "red";
      return;
    }

    mensaje.textContent = "Entrada correcta";
    mensaje.style.color = "green";
  });
</script>
```

### Qué hace cada cosa
- Primero comprueba que no esté vacío.
- Después comprueba el formato.
- Si algo falla, muestra error y para la ejecución.

---

## 9) Regex útiles para examen

### Solo números
```javascript
/^[0-9]+$/
```

### 5 cifras exactas
```javascript
/^[0-9]{5}$/
```

### Letras y espacios
```javascript
/^[A-Za-zÀ-ÿ\s]+$/
```

### Correo simple
```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Contraseña con letras y números
```javascript
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
```

### Fecha DD-MM-AAAA
```javascript
/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/
```

---

## 10) Patrón mental para examen

Cuando te pidan validar entrada de usuario, piensa así:

1. Leer el valor con `.value.trim()`.
2. Comprobar si está vacío.
3. Aplicar la regex con `.test()`.
4. Mostrar mensaje de error o éxito.
5. Cortar la función con `return` si hay fallo.

---

## 11) Resumen rápido

### Regex
```javascript
const patron = /.../;
patron.test(valor);
```

### Validación
```javascript
if (!patron.test(valor)) {
  // error
}
```

### Control de entrada
```javascript
if (valor === "") {
  // vacío
}
```

