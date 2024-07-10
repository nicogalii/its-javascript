/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 8.Timed conversion
    ● We will modify ‘Temperature conversion’ exercise from the lesson about
   functions
    ● Call celsiusToFahrenheit on temperatures from 0 to 100 so that one
   temperature is printed to the console every second
      ○ Use setInterval to achieve this goal.
      ○ Do the same thing using setTimeout.
 */
// Global variable
let i = 0;

/**
 * Console printing of celsius to fahrenheit conversion
 * @param {number} celsius - unit of measurement of temperature celsius
 */
function celsiusToFahrenheit(celsius) {
   let fahrenheit = (celsius * 9 / 5) + 32;
   console.log(`${celsius}°C sono ${fahrenheit}°F`);

   // Increment i
   i++;

   // Check if i is equal to 100
   if (i === 100) {
      clearInterval(timerID);
   }
}

// Schedule the printItems function to run with a one second delay between each item
let timerID = setInterval(celsiusToFahrenheit, 1000, 10);

