/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 7.Seconds
   Write two functions that based on the current date and time output the number
   of seconds:
    ● getSecondsToday() returns the number of seconds from the beginning of
   today
    ● getSecondsToTomorrow() returns the number of seconds till tomorrow
 */

/**
 * Calculete the number of seconds from the beginning of today
 * @param {object} date - Date
 * @returns {number} - Return of the total seconds of the date
 */
function getSecondsToday(date) {
  // Initialitation of the time at 00:00
  let totalSeconds = 0;

  // Extration of the hour, minutes and second of the day
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Convert of the hour, minutes in seconds and sum
  totalSeconds = (hour * 3600) + (minutes * 60) + seconds;

  return totalSeconds;
}

/**
 * Calculete the number of seconds till tomorrow
 * @param {object} date - Date
 * @returns {TipoOutput} - Return of the total seconds missing at tomorrow
 */
function getSecondsToTomorrow(date) {
  // Initialitation of the time at 00:00
  let totalSeconds = 0;

  // Extration of the hour, minutes and second of the day
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Convert of the hour, minutes in seconds and sum (86400 are the seconds in one day)
  totalSeconds = 86400 - ((hour * 3600) + (minutes * 60) + seconds);

  return totalSeconds;
}

// Function calls and testing
// Current date
let date = new Date();

console.log(getSecondsToday(date));

console.log(getSecondsToTomorrow(date));










