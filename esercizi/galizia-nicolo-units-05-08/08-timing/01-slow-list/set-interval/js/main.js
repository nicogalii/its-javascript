/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 /* 1.Slow list
   ● Create an array that holds a list of 30 items (food, books, etc.)
   ● Print one item of the list every second until the list is completely printed
     ○ Use setInterval to achieve this goal
     ○ Do the same thing using setTimeout
 */

const arrayOfItems = [
  "Cuffie",
  "Maglietta",
  "Taccuino",
  "Bicicletta",
  "Orologio",
  "Lampada frontale",
  "Zaino",
  "Romanzo",
  "Occhiali da sole",
  "Macchina del caffè",
  "Pianta",
  "Lampada da scrivania",
  "Pennello",
  "Biglietto del cinema",
  "Ombrello",
  "Tazza da viaggio",
  "Calcolatrice",
  "Bottiglia d'acqua",
  "Felpa",
  "Astuccio",
  "Caricabatterie per telefono",
  "Borsa da palestra",
  "Custodia per cuffie",
  "Portafoglio",
  "Braccialetto",
  "Pianta da interno",
  "Gioco da tavolo",
  "Candela",
  "Paio di calzini",
  "Filtro per l'acqua",
  "Fermalibri",
];

// Global variable
let i = 0;

/**
 * Function to calculate the square of the number
 * @param {string} item - One item of the array
 */
function printItems() {
  console.log(arrayOfItems[i]);
  i++;

  // Check if the i is equal a the lenght of the arrayOfItems
  if (i === arrayOfItems.length) {
    clearInterval(timerID);
  }
}

// Schedule the printItems function to run with a one second delay between each item
let timerID = setInterval(printItems, 1000);
