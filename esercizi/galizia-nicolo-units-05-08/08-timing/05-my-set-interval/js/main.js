/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 5.My setInterval
   ● Pretend that setInterval() doesn't exist
   ● Re-create it using setTimeout naming your function mySetInterval
   ● Test your new function
   ● Modify your function so that it automatically stops after 15 intervals
 */

/**
 * Function to print a element on console
 * @param {number} i - Value of the position of the loop for
 */
function mySetInterval(i) {
  console.log("Ciao mondo!", i + 1);
}

for (let i = 0; i < 15; i++) {
  // Schedule the mySetInterval function to 15 interval
  setTimeout(mySetInterval, (i + 1) * 1000, i);
}
