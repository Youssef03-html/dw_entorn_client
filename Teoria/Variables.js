// variables.js
// Ejemplos y reglas básicas de declaración de variables en JavaScript

// let: variable que puede reasignarse
let contador = 0;
contador = 5; // reasignación permitida

// const: valor constante (no se puede reasignar). Si es objeto/array, se puede mutar sus contenidos.
const PI = 3.1416;
// PI = 3; // ❌ Error: no se puede reasignar

// var: forma antigua, con hoisting y scope distinto. Evitar su uso en código moderno.
var antiguamente = "funciona, pero no usar";

// Nombres válidos: letra, $, _. NO pueden empezar por número.
// JavaScript distingue mayúsculas/minúsculas:
let nombre = "joan";
let Nombre = "Joan"; // son variables distintas

// Buenas prácticas: nombres descriptivos
let numeroDeAlumnos = 25;

// Pruebas / ejemplos
console.log("contador:", contador);          // 5
console.log("PI:", PI);                      // 3.1416
console.log("antiguamente:", antiguamente);  // "funciona, pero no usar"
console.log("nombre vs Nombre:", nombre, Nombre);
