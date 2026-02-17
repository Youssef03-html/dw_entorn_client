// operadores.js
// Operadores aritméticos, concatenación, incremento/decremento, y operadores lógicos

// Aritmética básica
console.log("5 + 2 =", 5 + 2);
console.log("6 * 3 =", 6 * 3);
console.log("3 / 2 =", 3 / 2);

// Concatenación con +
console.log("Hola " + "mundo" + "!"); // "Hola mundo!"

// Incremento / decremento: pre (++x) y post (x++)
let x = 1;
let y = ++x; // pre-incremento: x se incrementa antes de evaluar → x=2, y=2
x = 1; // reset
let z = x++; // post-incremento: z toma el valor actual (1), luego x se incrementa → z=1, x=2
console.log("pre y post:", y, z, x);

// typeof
console.log(typeof 5, typeof "texto", typeof true);

// Igualdad vs identidad
console.log("25 == '25' ->", 25 == "25");   // true (con conversión de tipos)
console.log("25 === '25' ->", 25 === "25"); // false (diferente tipo)

// Negación y doble negación
console.log("!true ->", !true);
console.log("!!'hola' ->", !!"hola"); // convierte valor a boolean (truthy -> true)

// Operadores lógicos y short-circuit
console.log("false && 'algo' ->", false && "algo"); // devuelve false (primer falsy)
console.log("0 || 5 ->", 0 || 5); // devuelve 5 (primer truthy)

// Valores falsy comunes:
// false, 0, -0, "", null, undefined, NaN, 0n
// Todos los demás valores son truthy (incluyendo "0", [], {})

