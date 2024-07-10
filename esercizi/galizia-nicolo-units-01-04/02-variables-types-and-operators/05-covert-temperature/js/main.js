/**
 * @file: main.js
 * @author: Nicolò Galizia
 * 
 * 5.Covert temperature
 * ● Store a celsius temperature into a variable.
 * ● Convert it to fahrenheit and output "NN°C is NN°F".
 * ● Now store a fahrenheit temperature into a variable.
 * ● Convert it to celsius and output "NN°F is NN°C.
 */

// Declaration of variables
let temperature_celsius = 10;
let temperature_conversion_fahrenheit = temperature_celsius * (9 / 5) + 32;

// Print in console
console.log(temperature_conversion_fahrenheit, '°F corrisponde a', temperature_celsius, '°C');
