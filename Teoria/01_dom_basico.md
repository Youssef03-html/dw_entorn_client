# 01. DOM básico

## 1) Qué es el DOM

El DOM (Document Object Model) es la representación en forma de árbol de una página HTML. Cada etiqueta, texto o atributo se convierte en un nodo que JavaScript puede leer y modificar.

### Idea clave
- El HTML es el texto que escribes.
- El DOM es la estructura que crea el navegador con ese HTML.
- JavaScript trabaja sobre el DOM para cambiar la página en tiempo real.

### Ejemplo 1: ver el DOM desde JavaScript

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>DOM básico</title>
</head>
<body>
  <h1 id="titulo">Hola DOM</h1>
  <p class="resumen">Esto es un ejemplo</p>

  <script>
    // document representa toda la página
    console.log(document);

    // Accedemos al título por su id
    const titulo = document.getElementById("titulo");
    console.log(titulo);

    // Accedemos al párrafo por selector CSS
    const resumen = document.querySelector(".resumen");
    console.log(resumen);
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `document`: representa toda la página.
- `getElementById()`: busca un elemento por su `id`.
- `querySelector()`: busca el primer elemento que coincida con un selector CSS.

---

## 2) Seleccionar elementos del DOM

### Métodos más usados
- `document.getElementById("id")`
- `document.querySelector("selector")`
- `document.querySelectorAll("selector")`
- `document.getElementsByTagName("etiqueta")`
- `document.getElementsByClassName("clase")`

### Ejemplo 2: seleccionar varios elementos

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Seleccionar elementos</title>
</head>
<body>
  <h1>Título</h1>
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>

  <script>
    // Devuelve una colección con todos los párrafos
    const parrafos = document.getElementsByTagName("p");
    console.log(parrafos.length);

    // Devuelve una NodeList con todos los párrafos
    const listaParrafos = document.querySelectorAll("p");
    console.log(listaParrafos.length);

    // Recorremos los resultados
    for (let i = 0; i < listaParrafos.length; i++) {
      console.log(listaParrafos[i].textContent);
    }
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `getElementsByTagName()` devuelve una colección de elementos por etiqueta.
- `querySelectorAll()` devuelve todos los elementos que cumplen el selector.
- `length` indica cuántos elementos hay.

---

## 3) Cambiar texto del DOM

### Propiedades importantes
- `textContent`: cambia solo texto.
- `innerHTML`: cambia contenido con etiquetas HTML.
- `innerText`: devuelve solo el texto visible.

### Ejemplo 3: cambiar texto con un botón

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cambiar texto</title>
</head>
<body>
  <h1 id="titulo">Texto original</h1>
  <button id="boton">Cambiar texto</button>

  <script>
    const titulo = document.getElementById("titulo");
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function () {
      // Cambia solo el texto del elemento
      titulo.textContent = "Texto cambiado desde JavaScript";
    });
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `addEventListener("click", ...)`: ejecuta una función al hacer clic.
- `textContent`: reemplaza el texto del elemento.

### Ejemplo 4: usar `innerHTML`

```html
<p id="mensaje">Hola</p>
<button id="boton">Poner HTML</button>

<script>
  const mensaje = document.getElementById("mensaje");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Inserta HTML dentro del párrafo
    mensaje.innerHTML = "<strong>Hola</strong> mundo";
  });
</script>
```

### Qué hace cada cosa
- `innerHTML`: permite meter etiquetas HTML dentro de un elemento.
- Se usa cuando se necesita formato, no solo texto plano.

---

## 4) Cambiar clases y estilos

### `classList`
Sirve para añadir, quitar o alternar clases CSS.

### `style`
Sirve para cambiar estilos directamente.

### Ejemplo 5: añadir una clase CSS

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Clases CSS</title>
  <style>
    .resaltado {
      color: green;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p id="mensaje">Este texto puede cambiar de estilo</p>
  <button id="boton">Poner estilo</button>

  <script>
    const mensaje = document.getElementById("mensaje");
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function () {
      // Añade la clase CSS resaltado
      mensaje.classList.add("resaltado");
    });
  </script>
</body>
</html>
```

### Qué hace cada cosa
- `classList.add()`: añade una clase.
- `classList.remove()`: elimina una clase.
- `classList.toggle()`: la pone o la quita.

### Ejemplo 6: cambiar estilos directamente

```html
<p id="caja">Texto</p>
<button id="boton">Cambiar color</button>

<script>
  const caja = document.getElementById("caja");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Cambia estilos concretos desde JavaScript
    caja.style.color = "blue";
    caja.style.backgroundColor = "lightgray";
    caja.style.padding = "10px";
  });
</script>
```

### Qué hace cada cosa
- `style.color`: cambia el color del texto.
- `style.backgroundColor`: cambia el fondo.
- `style.padding`: añade espacio interior.

---

## 5) Crear y eliminar elementos

### Ejemplo 7: crear un elemento nuevo

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
      // Creamos un nuevo <li>
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
- `appendChild()`: lo añade al final del contenedor.

### Ejemplo 8: eliminar un elemento

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
    // Cogemos el último hijo de la lista
    const ultimo = lista.lastElementChild;

    // Si existe, lo eliminamos
    if (ultimo) {
      ultimo.remove();
    }
  });
</script>
```

### Qué hace cada cosa
- `lastElementChild`: devuelve el último elemento hijo.
- `remove()`: elimina el nodo del DOM.

---

## 6) Resumen rápido para examen

### Selección
```javascript
const elemento = document.getElementById("id");
const lista = document.querySelectorAll("p");
```

### Texto
```javascript
elemento.textContent = "nuevo texto";
elemento.innerHTML = "<strong>texto</strong>";
```

### Clases
```javascript
elemento.classList.add("clase");
elemento.classList.remove("clase");
elemento.classList.toggle("clase");
```

### Estilos
```javascript
elemento.style.color = "red";
elemento.style.backgroundColor = "yellow";
```

### Crear y borrar
```javascript
const nuevo = document.createElement("p");
contenedor.appendChild(nuevo);
elemento.remove();
```

## 7) Idea mental importante

Si te ponen un ejercicio de DOM, casi siempre harás esto:
- buscar un elemento
- leer o cambiar su texto
- cambiar una clase o estilo
- crear o borrar nodos
- responder a un evento

