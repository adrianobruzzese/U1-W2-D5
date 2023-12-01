/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

// console.log(pets) se vogliamo la media del 5

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
} //se vogliamo essere più precisi

// pets.forEach((element)=> {console.log(element)}) usando nozioni che non abbiamo ancora affrontato insieme ma disponibili su internet

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//banalmente possiamo usare
//
//  console.log(pets.sort())

// oppure se vogliamo usare una funzione
function ordineAlfabetico(string) {
  const petsAlfabetical = [...pets];
  return petsAlfabetical.sort();
}

console.log(ordineAlfabetico());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
// di nuovo, potremmo usare
// console.log(pets.reverse())

//o per complicarci la vita
function ordineInvertito(string) {
  const petsInverted = [...pets];
  return petsInverted.reverse();
}

console.log(ordineInvertito());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift());

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

for (let i=0; i<cars.length; i++) {
  cars[0].lincensePlate = 'FV000HK';
  cars[1].lincensePlate = 'FV001HK';
  cars[2].lincensePlate = 'FV002HK';
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: 'Fiat',
  model: 'Multipla',
  color: 'electric blue',
  trims: ['greatest', 'fastest', 'most beautiful'],
  licensePlate: 'FV003HK',
};
cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0);

  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];


const getPosition = function(char) {
  switch(char) {
    case "a":
      return 0;
    case "b":
      return 1;
    case "c":
      return 2;
    case "d":
      return 3;
    case "e":
      return 4;
    case "f":
      return 5;
    case "g":
      return 6;
    case "h":
      return 7;
    case "i":
      return 8;
    case "j":
      return 9;
    case "k":
      return 10;
    case "l":
      return 11;
    case "m":
      return 12;
    case "n":
      return 13;
    case "o":
      return 14;
    case "p":
      return 15;
    case "q":
      return 16;
    case "r":
      return 17;
    case "s":
      return 18;
    case "t":
      return 19;
    case "u":
      return 20;
    case "v":
      return 21;
    case "w":
      return 22;
    case "x":
      return 23;
    case "y":
      return 24;
    case "z":
      return 25;
    default:
      return -1;
  }
};

const positionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i];
  const position = getPosition(char);
  positionArray.push(position);
}

console.log(positionArray);

