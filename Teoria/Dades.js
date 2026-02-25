/*
===========================================================
CLASE: Cómo leer y escribir datos del HTML con JavaScript
===========================================================

Este archivo explica paso a paso cómo:

1. Seleccionar elementos del DOM
2. Leer contenido del HTML
3. Escribir contenido en el HTML
4. Trabajar con inputs (formularios)
5. Crear y eliminar elementos dinámicamente
6. Manejar eventos correctamente

Puedes usar este archivo junto a un HTML de prueba.
Coloca el <script src="script.js"></script> al final del body.
*/


/* =========================================================
1. SELECCIONAR ELEMENTOS DEL DOM
========================================================= */

/*
Para poder leer o modificar algo en el HTML,
primero necesitamos obtener una referencia al elemento.
*/

// Seleccionar por id (el más común)
let titol = document.getElementById("titol");

// Seleccionar el primer elemento que coincida con un selector CSS
let primerParagraf = document.querySelector("p");

// Seleccionar varios elementos (devuelve una lista)
let llistaElements = document.querySelectorAll(".item");


/* =========================================================
2. LEER CONTENIDO DEL HTML
========================================================= */

/*
Existen varias formas de leer el contenido de un elemento.
*/

// textContent → devuelve solo el texto (recomendado)
if (titol) {
    console.log("Texto:", titol.textContent);
}

// innerText → similar pero tiene en cuenta estilos CSS
if (titol) {
    console.log("Texto visible:", titol.innerText);
}

// innerHTML → devuelve el HTML interno (incluye etiquetas)
if (titol) {
    console.log("HTML interno:", titol.innerHTML);
}


/* =========================================================
3. ESCRIBIR CONTENIDO EN EL HTML
========================================================= */

/*
Podemos modificar el contenido de un elemento.
*/

// Cambiar texto
if (titol) {
    titol.textContent = "Nuevo título generado con JavaScript";
}

// Insertar HTML (cuidado con datos del usuario)
if (titol) {
    titol.innerHTML = "<strong>Título en negrita</strong>";
}


/* =========================================================
4. TRABAJAR CON INPUTS (FORMULARIOS)
========================================================= */

/*
Para inputs usamos la propiedad .value
*/

// Suponiendo que existe: <input id="nom">
let inputNom = document.getElementById("nom");

if (inputNom) {

    // Leer valor del input
    let valor = inputNom.value;
    console.log("Valor introducido:", valor);

    // Escribir valor en el input
    inputNom.value = "Texto por defecto";
}


/* =========================================================
5. MANEJAR EVENTOS (CLICK, SUBMIT, ETC.)
========================================================= */

/*
Usamos addEventListener para reaccionar a acciones del usuario.
*/

// Suponiendo que existe: <button id="boto">
let boto = document.getElementById("boto");

if (boto) {

    boto.addEventListener("click", function () {

        console.log("Botón pulsado");

        // Ejemplo: modificar un elemento al hacer clic
        if (titol) {
            titol.textContent = "Has hecho clic en el botón";
        }
    });

}


/* =========================================================
6. CREAR ELEMENTOS DINÁMICAMENTE
========================================================= */

/*
Podemos crear elementos nuevos y añadirlos al DOM.
*/

// Crear un nuevo párrafo
let nouParagraf = document.createElement("p");

// Asignar texto
nouParagraf.textContent = "Este párrafo fue creado dinámicamente.";

// Añadirlo al body
document.body.appendChild(nouParagraf);


/* =========================================================
7. ELIMINAR ELEMENTOS
========================================================= */

/*
Podemos eliminar elementos del DOM.
*/

// Eliminar el párrafo creado (ejemplo)
if (nouParagraf) {
    nouParagraf.remove();
}


/* =========================================================
8. TRABAJAR CON ATRIBUTOS
========================================================= */

/*
Podemos leer y modificar atributos HTML.
*/

// Suponiendo: <img id="imatge" src="foto.jpg">
let imatge = document.getElementById("imatge");

if (imatge) {

    // Leer atributo
    let srcActual = imatge.getAttribute("src");
    console.log("Imagen actual:", srcActual);

    // Cambiar atributo
    imatge.setAttribute("src", "nova_foto.jpg");
}


/* =========================================================
9. RECORRER VARIOS ELEMENTOS
========================================================= */

if (llistaElements.length > 0) {

    for (let i = 0; i < llistaElements.length; i++) {
        console.log("Elemento", i, ":", llistaElements[i].textContent);
    }

}


/*
===========================================================
RESUMEN CLAVE
===========================================================

- getElementById → seleccionar elemento por id
- querySelector → seleccionar con CSS
- textContent → leer o escribir texto
- innerHTML → insertar HTML
- value → leer/escribir inputs
- createElement → crear elemento nuevo
- appendChild → añadir al DOM
- remove() → eliminar del DOM
- addEventListener → manejar eventos

Con esto puedes leer datos del HTML, modificarlos,
y crear contenido dinámico en cualquier página web.
*/
