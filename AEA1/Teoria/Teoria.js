// ARRAYS
// Poner nuevos valores en posiciones concretas de un array
const miArray = [1, 2, 3, 4, 5, 6, 7, 8];

// Queremos meter un valor en la cuarta posición (índice 3)
miArray[3] = "nuevo valor";

console.log(miArray);

//Si queremos hacerlo sin borrar nada:
const miArray = [1, 2, 3, 4, 5, 6, 7, 8];

//SPLICE
// splice(posición, elementos que queremos eliminar, el elemento) → inserta sin borrar
miArray.splice(3, 0, "nuevo valor");

const arr2 = [10, 20, 30, 40];

// Insertar 25 en la posición 2 (índice 1)
arr2.splice(1, 0, 25);
console.log(arr2); // [10, 25, 20, 30, 40]

// Borrar 2 elementos a partir de la posición 3
arr2.splice(3, 2);
console.log(arr2); // [10, 25, 20]

//PUSH
//al final
const arr = [1, 2, 3];
arr.push(4);

//UNSHIFT
//al principio
arr.unshift(0);

// Quitar del principio
arr.pop();
// Del final
arr.shift();

// Buscar elementos
const letras = ['a', 'b', 'c', 'd'];

console.log(letras.indexOf('c')); // 2
console.log(letras.includes('e')); // false