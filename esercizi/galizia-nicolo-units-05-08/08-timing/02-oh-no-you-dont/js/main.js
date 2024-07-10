/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 2.Oh no you don’t
   ● Write a function “useful” that does something useful in Javascript
   ● Schedule it to run after 10 seconds
   ● Write another function that cancels the scheduling of the first function
   ● Use the second function to cancel the first one after 5 seconds and output 
   ‘function cancelled’ to the console
 */

/**
 * Function used to print the information in console
 */
function useful() {
  console.log("Ciao mondo!");
}

/**
 * Function used to cancelled the information in console
 */
function stopUseful() {
  // Delete the schedule of the timerID
  clearTimeout(timerID);
  console.log("Funzione annullata");
}

// Schedule the useful function after 10 seconds
let timerID = setTimeout(useful, 10000);

// Schedule the cancelling function after 5 seconds
setTimeout(stopUseful, 5000);
