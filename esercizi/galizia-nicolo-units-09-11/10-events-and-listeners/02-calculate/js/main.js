/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-07-14
 * @description 
*/

/**
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function squareNumber(number) {
    let result = number * number;
    return result;
}

/**
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function halfNumber(number) {
    let result = number / 2;
    return result;
}

/**
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function percentage(number, percentage) {
    let result = (number * percentage) / 100;
    return result;
}

/**
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
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

// Add an event listener to the buttom to calcolate the square of a number
document.getElementById('half-button').addEventListener('click', function () {
    const number = document.getElementById('half-input').value;
    const result = halfNumber(number);
    document.getElementById('solution').textContent = `La metà di ${number} è ${result}`;
});

// Add an event listener to the buttom to calcolate the square of a number
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