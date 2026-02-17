// predefinidas.js
// Ejemplos de funciones predefinidas del lenguaje y uso seguro / notas

// parseInt: convierte string a entero. Segundo parámetro = base (radix).
console.log(parseInt("42"));       // 42
console.log(parseInt("101", 2));   // 5 (binario)
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc"));      // NaN

// parseFloat: convierte a número flotante (decimal)
console.log(parseFloat("3.1416")); // 3.1416
console.log(parseFloat("10e2"));   // 1000
console.log(parseFloat("5.5kg"));  // 5.5
console.log(parseFloat("hola"));   // NaN

// isNaN: comprueba si el valor es NaN (convierte antes a número)
console.log(isNaN("hola"));   // true
console.log(isNaN(5));        // false
console.log(isNaN(NaN));      // true
console.log(isNaN("123"));    // false (porque "123" se puede convertir a número)

// Number.isNaN es más estricto (no hace conversión implícita)
console.log(Number.isNaN("hola")); // false -> porque "hola" no es el valor NaN, simplemente no se convierte

// eval: ejecuta código JS dentro de una cadena (¡peligroso! evitar su uso con entradas externas)
console.log(eval("2 + 2")); // 4
// Ejemplo peligroso (no ejecutar con entradas de usuarios):
// eval(userInput);

// console.log: depuración
console.log("Depuración:", { a: 1, b: [1,2,3] });

// alert: muestra popup (solo en navegador). Bloquea la ejecución.
 // alert("Hola mundo"); // descomenta si lo vas a probar en navegador

// Recomendaciones:
// - Ante una cadena que debe ser número, usar parseInt/parseFloat o Number().
// - Evitar eval salvo para casos muy concretos y controlados.
// - Preferir Number.isNaN sobre isNaN cuando necesites comprobación estricta.
