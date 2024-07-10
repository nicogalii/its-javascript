/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 5.Geometry library
 * ● Create a function called calcCircumfrence:
 * ○ Pass the radius to the function
 * ○ Calculate the circumference based on the radius, and output "The circumference is NN"
 * ● Create a function called calcArea:
 * ○ Pass the radius to the function.
 * ○ Calculate the area based on the radius, and output "The area is NN"
 */

/**
* Printing in console the circle circumference 
* @param {number} radius - radius of the circle
*/
function calcCircumfrence(radius) {
    let circumference = 2 * radius * 3.14;
    console.log(`La circonferenza è ${circumference}`);
}

/**
* Print in console the circle area
* @param {number} radius - radius of the circle
*/
function calcArea(radius) {
    let area = 3.14 * radius * radius;
    console.log(`L'area è ${area}`);
}

// Result of the circle circumference
calcCircumfrence(5);

// Result of the circle area
calcArea(5);