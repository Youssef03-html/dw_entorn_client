// tipos.js
// Tipos primitivos y cómo detectarlos con typeof

// Number (enteros y decimales)
let entero = 5;
let decimal = 3.14;
console.log(typeof entero, typeof decimal); // "number" "number"

// BigInt: enteros muy grandes, literal termina en n
let granNumero = 123456789012345678901234567890n;
console.log(typeof granNumero, granNumero); // "bigint" 123...n
// Nota: no mezclar BigInt y Number en operaciones aritméticas sin conversión

// Boolean
let esActivo = true;
console.log(typeof esActivo, esActivo); // "boolean" true

// String
let saludo = "Hola mundo";
let saludoTemplate = `Hola, ${"Marta"}!`; // template string
console.log(typeof saludo, saludo, saludoTemplate); // "string"

// Undefined (variable declarada sin asignar)
let sinValor;
console.log(typeof sinValor, sinValor); // "undefined" undefined

// Null (ausencia intencional de valor)
let nada = null;
console.log(typeof nada, nada); // "object" null  -> typeof null es historicament "object"

// Symbol (identificador único)
const id = Symbol("usuarioID");
console.log(typeof id, id); // "symbol" Symbol(usuarioID)

// Nota: typeof null devuelve "object" por compatibilidad histórica

// Pruebas / ejemplos
console.log("Tipos: ", typeof entero, typeof granNumero, typeof saludo, typeof sinValor, typeof nada, typeof id);
