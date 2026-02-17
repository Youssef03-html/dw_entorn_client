// funciones_definidas.js
// Declaración de funciones, funciones anónimas, arrow functions, parámetros y arguments

// Declaración clásica
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log(saludar("Joan")); // "Hola, Joan!"

// Llamada sin parámetros: el parámetro será undefined
console.log(saludar()); // "Hola, undefined!"

// Función anónima asignada a variable
let sumar = function(a, b) {
  return a + b;
};
console.log(sumar(3, 4)); // 7

// Arrow function (más concisa)
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

// Arrow con un solo parámetro (paréntesis opcionales)
const doble = x => x * 2;
console.log(doble(5)); // 10

// Arrow con cuerpo de varias líneas: usar {}
const mostrar = nombre => {
  console.log("Hola " + nombre);
  return true;
};
mostrar("Pau");

// Parámetros por defecto
function potencia(base, exponente = 2) {
  return Math.pow(base, exponente);
}
console.log(potencia(3));    // 9
console.log(potencia(3, 3)); // 27

// arguments (solo en funciones tradicionales, NO en arrow functions)
function listar() {
  for (let i = 0; i < arguments.length; i++) {
    console.log("arg", i, "=", arguments[i]);
  }
}
listar("a", "b", "c");

// rest parameters (forma moderna de recoger argumentos extra)
function sumaTodos(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumaTodos(1,2,3,4)); // 10

// spread operator para pasar array como argumentos
const nums = [2,3,4];
console.log(Math.max(...nums)); // 4

// Ejemplo: función que retorna otra función (higher-order / closure simple)
function crearSaludo(prefijo) {
  return function(nombre) {
    return `${prefijo} ${nombre}`;
  };
}
const hola = crearSaludo("Hola,");
console.log(hola("Marta")); // "Hola, Marta"
