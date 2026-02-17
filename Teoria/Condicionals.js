// condicionales.js
// Ternario, if, if/else if/else y switch

// Operador ternario: condicion ? siVerdadero : siFalso
let numero = 10;
let esPar = (numero % 2 === 0) ? "par" : "impar";
console.log(numero, "es", esPar);

// if simple
let nota = 8;
if (nota >= 5) {
  console.log("Aprobado");
}

// if / else
if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

// if / else if / else
if (nota < 5) {
  console.log("Suspenso");
} else if (nota < 7) {
  console.log("Bien");
} else if (nota < 9) {
  console.log("Notable");
} else {
  console.log("Excelente");
}

// switch: comparar contra varios casos (usar break para evitar "fall-through")
let color = "groc"; // catalán en teoría, usamos strings tal cual
switch (color) {
  case "vermell":
    console.log("color: vermell");
    break;
  case "groc":
    console.log("color: groc");
    break;
  case "verd":
    console.log("color: verd");
    break;
  default:
    console.log("color no reconocido");
    break;
}

// Pruebas
console.log("Ternario par:", esPar);
