// 5. ARRAYS
// ===========

// Crear un array
const fruits = ["poma", "plàtan", "maduixa"];

// Accedir a elements
console.log(fruits[0]); // poma
console.log(fruits.length);

// Afegir i eliminar elements
fruits.push("kiwi");     // afegeix al final
fruits.unshift("pera");  // afegeix al principi
fruits.pop();            // elimina l’últim
fruits.shift();          // elimina el primer
console.log(fruits);

// Recorregut
for (let fruita of fruits) {
  console.log(fruita);
}

// Mètodes útils
const nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 2));          // [2,4,6,8,10] El método map() transforma cada elemento de un array aplicando una función a cada uno, y devuelve un nuevo array con los resultados.
console.log(nums.filter(n => n % 2 === 0)); // [2,4] Devuelve un nuevo array solo con los elementos que cumplen una condición.
console.log(nums.reduce((a,b)=>a+b,0));     // suma total = 15 Transforma el array en un único valor combinando todos los elementos.

// ============================
// APUNTS MOLT COMPLETS ARRAYS
// ============================

// 1) Què és un array?
// Un array és una llista ordenada d'elements. En JS és un objecte especial.
const buit = [];
const barrejat = [1, "hola", true, null, { nom: "Ada" }];

// 2) Index i length
const lletres = ["a", "b", "c"];
console.log(lletres[0]); // a
console.log(lletres[2]); // c
console.log(lletres.length); // 3

// length es pot modificar
const arr = [1, 2, 3, 4];
arr.length = 2; // truncar
console.log(arr); // [1,2]
arr.length = 5; // afegeix slots buits
console.log(arr); // [1,2, <3 empty items>]

// 3) Mutabilitat i referencies
const a1 = [1, 2];
const a2 = a1; // mateixa referencia
a2.push(3);
console.log(a1); // [1,2,3]

// 4) Copiar arrays (copia superficial)
const original = [{ nom: "Ada" }, { nom: "Linus" }];
const copia1 = original.slice();
const copia2 = [...original];
const copia3 = Array.from(original);
// Atencio: els objectes interns es comparteixen
copia1[0].nom = "Ada Lovelace";
console.log(original[0].nom); // "Ada Lovelace"

// 5) Afegir / eliminar (mutables)
const noms = ["A", "B", "C"];
noms.push("D"); // al final
noms.pop();      // elimina l'ultim
noms.unshift("Z"); // al principi
noms.shift();       // elimina el primer

// 6) slice vs splice
const nums2 = [10, 20, 30, 40, 50];
const sub = nums2.slice(1, 4); // no modifica, [20,30,40]
const tallat = nums2.splice(2, 2, 99, 100); // modifica, elimina i insereix
console.log(sub); // [20,30,40]
console.log(tallat); // [30,40]
console.log(nums2); // [10,20,99,100,50]

// 7) concat i spread
const c1 = [1, 2];
const c2 = [3, 4];
const total = c1.concat(c2); // [1,2,3,4]
const total2 = [...c1, ...c2, 5]; // [1,2,3,4,5]

// 8) Recorreguts
const letters = ["x", "y", "z"];
for (let i = 0; i < letters.length; i++) {
  console.log(i, letters[i]);
}
for (const item of letters) {
  console.log(item);
}
letters.forEach((item, i) => {
  console.log(i, item);
});

// 9) Mètodes de cerca
const animals = ["gos", "gat", "ocell", "gos"];
console.log(animals.indexOf("gat")); // 1
console.log(animals.lastIndexOf("gos")); // 3
console.log(animals.includes("vaca")); // false
console.log(animals.find(a => a.length === 3)); // "gos"
console.log(animals.findIndex(a => a === "ocell")); // 2

// 10) Alguns / tots
const edats = [12, 18, 22];
console.log(edats.some(e => e >= 18)); // true
console.log(edats.every(e => e >= 18)); // false

// 11) Transformacions
const numList = [1, 2, 3, 4];
const dobles = numList.map(n => n * 2); // [2,4,6,8]
const parells = numList.filter(n => n % 2 === 0); // [2,4]
const suma = numList.reduce((acc, n) => acc + n, 0); // 10
const agrupat = [1, 2, 3, 4, 5].reduce((acc, n) => {
  const clau = n % 2 === 0 ? "parell" : "senar";
  acc[clau].push(n);
  return acc;
}, { parell: [], senar: [] });
console.log(agrupat); // {parell:[2,4], senar:[1,3,5]}

// 12) Ordenacio
const nums3 = [10, 2, 30, 4];
nums3.sort(); // ordena com a text: [10,2,30,4]
nums3.sort((a, b) => a - b); // orden numeric correcte
const noms2 = ["Ada", "joan", "Zoe"];
noms2.sort((a, b) => a.localeCompare(b, "ca"));

// 13) reverse
const invertit = [1, 2, 3];
invertit.reverse(); // modifica l'array

// 14) join i split
const parts = ["2026", "02", "18"];
const data = parts.join("-"); // "2026-02-18"
const altra = data.split("-"); // ["2026","02","18"]

// 15) flat i flatMap
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat()); // [1,2,3,4,[5]]
console.log(nested.flat(2)); // [1,2,3,4,5]
const paraules = ["hola", "mon"];
const lletres2 = paraules.flatMap(p => p.split(""));

// 16) Array.from i Array.of
const text = "abc";
console.log(Array.from(text)); // ["a","b","c"]
console.log(Array.of(7)); // [7]

// 17) fill
const zeros = new Array(3).fill(0); // [0,0,0]
const parcial = [1, 2, 3, 4].fill(9, 1, 3); // [1,9,9,4]

// 18) Destructuring i rest
const punts = [10, 20, 30, 40];
const [primer, segon, ...resta] = punts;
console.log(primer, segon, resta); // 10 20 [30,40]

// 19) Comparar arrays
// a === b compara referencia, no contingut
const x = [1, 2];
const y = [1, 2];
console.log(x === y); // false
// Comparacio simple (mateix ordre):
const iguals = x.length === y.length && x.every((v, i) => v === y[i]);

// 20) Arrays i objectes
const alumnes = [
  { nom: "Ada", nota: 9 },
  { nom: "Linus", nota: 6 },
  { nom: "Grace", nota: 8 }
];
const aprovats = alumnes.filter(a => a.nota >= 5);
const nomsAprovats = aprovats.map(a => a.nom);
const maxNota = alumnes.reduce((max, a) => Math.max(max, a.nota), 0);

// 21) Arrays multidimensionals
const tauler = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", " ", "O"]
];
console.log(tauler[1][2]); // "O"

// 22) Slots buits i delete
const sparse = [1, , 3]; // slot buit
console.log(sparse.length); // 3
console.log(sparse[1]); // undefined
delete sparse[0]; // deixa slot buit
console.log(sparse); // [<1 empty item>, <1 empty item>, 3]
// Evita delete per eliminar; millor splice

// 23) Bones practiques
// - Usa map/filter/reduce per a dades derivades
// - Usa slice/spread per copies immutables
// - Fes sort amb comparator numeric/locale
// - Evita modificar length directament fora d'exemples controlats

// 24) Exercici rapid
// Dona un array de notes, retorna mitjana i max
const notes = [5, 7, 9, 4, 6];
const mitjana = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const maxim = Math.max(...notes);
console.log(mitjana, maxim);