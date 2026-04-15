# 04. DOM práctico de examen

## 1) Crear elementos nuevos

### Idea clave
Con JavaScript podemos crear elementos desde cero y meterlos en la página.

### Ejemplo 1: añadir elementos a una lista

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Crear elementos</title>
</head>
<body>
  <ul id="lista"></ul>
  <button id="boton">Añadir elemento</button>

  <script>
    const lista = document.getElementById("lista");
    const boton = document.getElementById("boton");
    let contador = 1;

    boton.addEventListener("click", function () {
      // Creamos un nuevo elemento <li>
      const nuevoElemento = document.createElement("li");

      // Le ponemos texto
      nuevoElemento.textContent = "Elemento " + contador;

      // Lo añadimos al final de la lista
      lista.appendChild(nuevoElemento);

      contador++;
    });
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `createElement()`: crea un nodo nuevo.
- `textContent`: pone el texto dentro del nodo.
- `appendChild()`: añade el nodo al final.

---

## 2) Eliminar elementos

### Idea clave
Podemos borrar elementos que ya no queremos mostrar.

### Ejemplo 2: eliminar el último elemento

```html
<ul id="lista">
  <li>Uno</li>
  <li>Dos</li>
  <li>Tres</li>
</ul>
<button id="boton">Eliminar último</button>

<script>
  const lista = document.getElementById("lista");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Cogemos el último elemento hijo
    const ultimo = lista.lastElementChild;

    // Si existe, lo eliminamos
    if (ultimo) {
      ultimo.remove();
    }
  });
</script>
```

### Qué hace cada cosa
- `lastElementChild`: devuelve el último hijo que sea elemento.
- `remove()`: elimina el nodo del DOM.

---

## 3) Reemplazar elementos

### Idea clave
También podemos sustituir un elemento por otro.

### Ejemplo 3: cambiar un párrafo

```html
<div id="contenedor">
  <p id="texto">Texto antiguo</p>
</div>
<button id="boton">Cambiar elemento</button>

<script>
  const contenedor = document.getElementById("contenedor");
  const texto = document.getElementById("texto");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Creamos un nuevo párrafo
    const nuevo = document.createElement("p");
    nuevo.textContent = "Texto nuevo";

    // Reemplazamos el antiguo por el nuevo
    contenedor.replaceChild(nuevo, texto);
  });
</script>
```

### Qué hace cada cosa
- `replaceChild(nuevo, viejo)`: sustituye un nodo por otro.

---

## 4) Borrar todo el contenido de un contenedor

### Ejemplo 4: vaciar una caja

```html
<div id="contenedor">
  <p>Uno</p>
  <p>Dos</p>
</div>
<button id="boton">Vaciar</button>

<script>
  const contenedor = document.getElementById("contenedor");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Elimina todo el contenido interno del contenedor
    contenedor.innerHTML = "";
  });
</script>
```

### Qué hace cada cosa
- `innerHTML = ""`: deja el contenedor vacío.

---

## 5) Cambiar atributos

### Idea clave
Los elementos HTML tienen atributos como `href`, `src`, `title`, `id`, etc.

### Ejemplo 5: cambiar un enlace

```html
<a id="enlace" href="https://google.com">Ir a Google</a>
<button id="boton">Cambiar enlace</button>

<script>
  const enlace = document.getElementById("enlace");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Cambia el valor del atributo href
    enlace.setAttribute("href", "https://www.example.com");
  });
</script>
```

### Qué hace cada cosa
- `setAttribute()`: cambia o añade un atributo.
- `getAttribute()`: lee un atributo.
- `removeAttribute()`: elimina un atributo.

---

## 6) Trabajar con clases

### Ejemplo 6: modo oscuro

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Clases</title>
  <style>
    .oscuro {
      background-color: #222;
      color: white;
    }
  </style>
</head>
<body>
  <button id="boton">Cambiar modo</button>

  <script>
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function () {
      // Alterna la clase oscuro en el body
      document.body.classList.toggle("oscuro");
    });
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `classList.toggle()`: añade la clase si no está, o la quita si ya está.

---

## 7) Remarcar errores en un formulario

### Ejemplo 7: validación visual

```html
<form id="formulario">
  <p>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
    <span id="errorNombre" style="display:none; color:red;">Nombre obligatorio</span>
  </p>

  <button type="submit">Enviar</button>
</form>

<script>
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const errorNombre = document.getElementById("errorNombre");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = nombre.value.trim();

    if (valor.length < 3) {
      // Marcamos el campo como incorrecto
      nombre.classList.add("incorrecto");
      errorNombre.style.display = "inline";
    } else {
      // Quitamos el error
      nombre.classList.remove("incorrecto");
      errorNombre.style.display = "none";
    }
  });
</script>
```

### Qué hace cada cosa
- `classList.add("incorrecto")`: añade una clase de error.
- `style.display = "none"`: oculta el mensaje.
- `style.display = "inline"`: muestra el mensaje.

---

## 8) Resumen de métodos útiles

### Crear
```javascript
createElement("p")
```

### Añadir
```javascript
appendChild(elemento)
```

### Eliminar
```javascript
remove()
removeChild(elemento)
```

### Reemplazar
```javascript
replaceChild(nuevo, viejo)
```

### Vaciar
```javascript
innerHTML = ""
```

### Clases
```javascript
classList.add("x")
classList.remove("x")
classList.toggle("x")
```

### Atributos
```javascript
getAttribute("href")
setAttribute("href", "...")
removeAttribute("title")
```

---

## 9) Patrón mental para examen

Cuando te pidan manipular el DOM, normalmente harás esto:

1. Buscar el elemento.
2. Leer algo de él.
3. Crear, borrar o cambiar un nodo.
4. Cambiar una clase o un estilo.
5. Mostrar el resultado al usuario.

---

## 10) Mini ejemplo de todo junto

```html
<form id="formulario">
  <input type="text" id="texto">
  <button type="submit">Añadir</button>
</form>
<ul id="lista"></ul>

<script>
  const formulario = document.getElementById("formulario");
  const texto = document.getElementById("texto");
  const lista = document.getElementById("lista");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = texto.value.trim();

    if (valor === "") {
      return;
    }

    const li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);

    texto.value = "";
  });
</script>
```

### Qué hace cada cosa
- Lee el texto del input.
- Si no está vacío, crea un `<li>`.
- Lo añade a la lista.
- Vacía el input.

