// EXERCICI 1:

// Importo el mòdul readline per capturar dades de l'usuari a la consola
const readline = require('readline');

// Creo la interfície per llegir i escriure dades
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunto el primer nombre
rl.question("Introdueix el primer nombre: ", (num1) => {
  // Pregunto el segon nombre
  rl.question("Introdueix el segon nombre: ", (num2) => {
    // Converteixo les respostes a nombre
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Mostro per consola les operacions
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicació: " + (num1 * num2));
    console.log("Divisió: " + (num1 / num2));

    
    // EXERCICI 2:

    // Declaro i defineixo les variables
    let x = 5;
    let y = "5";

    // Comparo amb == i amb ===
    console.log("x == y: " + (x == y));   // true
    console.log("x === y: " + (x === y)); // false
    console.log("== compara només el valor, === compara valor i tipus");
    

    // EXERCICI 3:

    // Declaro i defineixo la variable nota
    let nota = 8;

    // Mostro l'expressió que retorna true si nota > 5 i <= 10
    console.log("nota > 5 && nota <= 10: " + (nota > 5 && nota <= 10));

    rl.close();
  });
});
