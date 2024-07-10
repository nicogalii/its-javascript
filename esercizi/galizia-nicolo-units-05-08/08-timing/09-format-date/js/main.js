/**
 * @file     main.js
 * @author   Nicolò Galizia
 *
 * 9. Format date
   Write a function formatDate(date) that accepts a date and outputs it as follows:
   ● If less than a second has passed since the date, output "right now"
   ● If less than a minute has passed since the date, output "n sec. ago"
   ● If less than an hour has passed since the date, output "m min. ago"
   ● Otherwise, output the date in this format "DD.MM.YY HH:mm"
   ○ e.g. 17.04.16 10:00
 */

/**
 * Print in console the different time between two date
 * @param {object} date - Date
 */
function formatDate(date) {
  let courrentDate = new Date();

  // Suddivision of the date
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Milliseconds of different between two date
  let millis = courrentDate - date;

  // Trsformescion of the millisecons in seconds
  let secDiff = Math.floor(millis / 1000);
  let minDiff = Math.floor(millis / 60000);
  let hourDiff = Math.floor(millis / 3600000);

  // Check if the different seconds are < of 1 seconds
  if (secDiff < 1) {
    // Print in console 
    console.log('Right now!'); // Output: Right now!

    // Check if the different seconds are < of 60 seconds
  } else if (secDiff < 60) {
    console.log(`${secDiff} sec.ago`)

    // Check if the different minutes are < of 1
  } else if (minDiff < 60) {
    // Print in console
    console.log(`${minDiff} min. ago`); // Output: 1 sec. ago

    // Check if the different hours are < of 1
  } else if (hourDiff < 24) {
    // Print in console
    console.log(`${hourDiff} hour. ago`); // Output: 1 min. ago

    // Otherwise, print date in format "DD.MM.YY HH:mm"
  } else {
    // Print in console the date
    clearInterval(timerID);
    console.log(`${day}.${month + 1}.${year} ${hours}:${minutes}`);
  }
}

// Schedule the printItems function to run with a one second delay between each item
const date = new Date();
let timerID = setInterval(formatDate, 1 + 1000, date);
