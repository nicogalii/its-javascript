/**
 * @file     main.js
 * @author   Nicolò Galizia
 *
 * 6.Date ago
  ● Create a function getDateAgo(date, days) that returns the day of the month
    n days ago from the given date
  ● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be
    19th and getDateAgo(new Date(), 2) should be 18th
  ● Test the function to make sure it works reliably with any valid Date object
  ● Decide what to do with a negative 'days' parameter
    ○ e.g. getDateAgo(new Date(), -2)
*/

/**
 * Descrizione della funzione
 * @param {object} date - Date current
 * @param {number} day - Day to subtract from the date 
 * @returns {number}
 */
function getDateAgo(date, days) {
  // Check if days is > of 0
  if (days > 0) {
    let dateDiff = date.setDate(date.getDate() - days)
    return dateDiff;
  } else {
    // Return message who the days instert is negative
    return `Il giorno inserito è negativo`;
  }
}

// Print in console the call function
let data = new Date();
console.log(getDateAgo(data, 1));
console.log(getDateAgo(data, -1));