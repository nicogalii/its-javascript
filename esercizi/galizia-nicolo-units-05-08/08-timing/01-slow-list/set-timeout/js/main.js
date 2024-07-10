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

// Function to print a element on console
function printItems(item) {
  console.log(item);
}

// Schedule the printItems function to run with a one second delay the arrayOfItems
for (let i = 0; i < arrayOfItems.length; i++) {
  setTimeout(printItems, (i + 1) * 1000, arrayOfItems[i]);
}
