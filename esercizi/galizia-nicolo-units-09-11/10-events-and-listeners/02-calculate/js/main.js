/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-07-14
 * @description 
*/

/**
 * Calculates the square of a number
 * @param {number} number - The number to be squared
 * @returns {number} - The square of the number
 */
function squareNumber(number) {
    let result = number * number;
    return result;
}

/**
 * Calculates half of a number
 * @param {number} number - The number to be halved
 * @returns {number} - Half of the number
 */
function halfNumber(number) {
    let result = number / 2;
    return result;
}

/**
 * Calculates the percentage of a number
 * @param {number} number - The number on which to calculate the percentage
 * @param {number} percentage - The percentage to calculate
 * @returns {number} - The percentage of the number
 */
function percentage(number, percentage) {
    let result = (number * percentage) / 100;
    return result;
}

/**
 * Calculates the area of a circle given the radius
 * @param {number} radius - The radius of the circle
 * @returns {number} - The area of the circle
 */
function areaOfCircle(radius) {
    let result = Math.PI * radius * radius;
    return result;
}

// Add an event listener to the buttom to calcolate the square of a number
document.getElementById('square-button').addEventListener('click', function () {
    const number = document.getElementById('square-input').value;
    const result = squareNumber(number);
    document.getElementById('solution').textContent = `Il quadrato di ${number} è ${result}`;
});

// Add an event listener to the buttom to calcolate the half of a number
document.getElementById('half-button').addEventListener('click', function () {
    const number = document.getElementById('half-input').value;
    const result = halfNumber(number);
    document.getElementById('solution').textContent = `La metà di ${number} è ${result}`;
});

// Add an event listener to the buttom to calcolate the percentage of a number
document.getElementById('percentage-button').addEventListener('click', function () {
    const number = document.getElementById('percentage-input-one').value;
    const perc = document.getElementById('percentage-input-two').value;
    const result = percentage(number, perc);
    document.getElementById('solution').textContent = `Il ${perc}% di ${number} è ${result}`;
});

// Add an event listener to the buttom to calcolate the area of the circle with the radius
document.getElementById('circle-area-button').addEventListener('click', function () {
    const number = document.getElementById('circle-area-input').value;
    const result = areaOfCircle(number);
    document.getElementById('solution').textContent = `L'area di un cerchio con raggio ${number} è ${result}`;
});