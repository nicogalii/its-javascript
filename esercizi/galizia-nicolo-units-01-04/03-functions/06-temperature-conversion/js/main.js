/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 6.Temperature conversion
 * Create a function called celsiusToFahrenheit:
 * ● Store a celsius temperature into a variable.
 * ● Convert it to fahrenheit and output "NN°C is NN°F".
 * Create a function called fahrenheitToCelsius:
 * ● Now store a fahrenheit temperature into a variable.
 * ● Convert it to celsius and output "NN°F is NN°C."
 */

/**
* Console printing of celsius to fahrenheit conversion
* @param {number} celsius - unit of measurement of temperature celsius
*/
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C sono ${fahrenheit}°F`);
}

/**
* Console printing of fahrenheit to celsius conversion
* @param {number} fahrenheit - unit of measurement of temperature fahrenheit
*/
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F sono ${celsius}°C`);
}

// Celsius to Fahrenheit conversion
celsiusToFahrenheit(30);

// Fahrenheit to Celsius conversion 
fahrenheitToCelsius(10);
