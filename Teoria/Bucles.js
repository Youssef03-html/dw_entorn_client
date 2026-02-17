// bucles.js
// while, do...while, for, forEach, for...in y for...of

// while
let i = 1;
while (i <= 5) {
  console.log("while i:", i);
  i++;
}

// do...while (se ejecuta al menos una vez)
let j = 1;
do {
  console.log("do...while j:", j);
  j++;
} while (j <= 3);

// for clásico
for (let k = 0; k < 5; k++) {
  console.log("for k:", k);
}

// buena práctica: evitar recalcular .length en cada iteración
let arr = [10, 20, 30, 40];
for (let idx = 0, len = arr.length; idx < len; idx++) {
  console.log("optimizado:", arr[idx]);
}

// forEach (método de array)
arr.forEach((valor, index) => {
  console.log("forEach:", index, valor);
});

// for...in (recorre claves de objeto)
let persona = { nombre: "Ana", edad: 30 };
for (let clave in persona) {
  console.log("for...in", clave, "=", persona[clave]);
}

// for...of (recorre valores de iterables: arrays, strings, etc.)
for (let val of ["a", "b", "c"]) {
  console.log("for...of:", val);
}

// Pruebas rápidas
console.log("Bucle finalizado.");
