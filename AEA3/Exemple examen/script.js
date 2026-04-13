// Espera a que la página esté completamente cargada
window.addEventListener("load", init);

// Función inicial donde conectamos botones con funciones
function init() {
    // Cada botón ejecuta una función al hacer click
    document.getElementById("btnDOM").addEventListener("click", eliminarTitol);
    document.getElementById("btnLib").addEventListener("click", desordenarTitol);
    document.getElementById("btnEvents").addEventListener("click", canviarEstilTitol);
    document.getElementById("btnRegex").addEventListener("click", validarCamps);
}

//////////////////////////////////////////////////////
// DOM → eliminar el título
//////////////////////////////////////////////////////
function eliminarTitol() {
    // Buscamos el elemento con id "titol"
    let titol = document.getElementById("titol");

    // Comprobamos que existe
    if (titol) {
        // Lo eliminamos del DOM
        titol.remove();
    }
}

//////////////////////////////////////////////////////
// Llibreries → desordenar letras del título
//////////////////////////////////////////////////////
function desordenarTitol() {
    let titol = document.getElementById("titol");

    if (titol) {
        // Convertimos el texto en array de letras
        let text = titol.textContent.split("");

        // Algoritmo para mezclar el array (tipo Fisher-Yates)
        for (let i = text.length - 1; i > 0; i--) {
            // Índice aleatorio
            let j = Math.floor(Math.random() * (i + 1));

            // Intercambio de posiciones
            let temp = text[i];
            text[i] = text[j];
            text[j] = temp;
        }

        // Volvemos a unir el array en texto
        titol.textContent = text.join("");
    }
}

//////////////////////////////////////////////////////
// Eventos → cambiar estilo del título
//////////////////////////////////////////////////////
function canviarEstilTitol() {
    let titol = document.getElementById("titol");

    if (titol) {
        // Cambiamos estilos directamente con style
        titol.style.color = "red";
        titol.style.fontSize = "40px";
    }
}

//////////////////////////////////////////////////////
// Regex → validar los campos
//////////////////////////////////////////////////////
function validarCamps() {

    // Leemos los valores de los inputs
    let camp1 = document.getElementById("camp1").value;
    let camp2 = document.getElementById("camp2").value;

    // Expresión regular:
    // - letras (incluye acentos)
    // - espacios
    // - mínimo 3 caracteres
    let regexText = /^[A-Za-zÀ-ÿ\s]{3,}$/;

    // Validamos cada campo
    let valid1 = regexText.test(camp1);
    let valid2 = regexText.test(camp2);

    // Mostramos resultado
    if (valid1 && valid2) {
        alert("Camps correctes ✅");
    } else {
        alert("Alguns camps NO són correctes ❌");
    }
}