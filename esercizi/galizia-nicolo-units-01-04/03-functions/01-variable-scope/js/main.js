/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 1.Variable Scope
 * ● Recreate the local and global scope examples in your browser
 * ● Try to call the function “addNumbers” a few more times
 * ● Write a new .js file that uses both local and global variables in the same project
 * ● Make sure that you understand exactly what’s happening at every stage
 */

/**
* Print in console the sum
* @param {number} num1 - number 1
* @param {number} num2 - number 2
*/
function calcSum(num1, num2) {
    let somma = num1 + num2;
    console.log(`La somma è ${somma}`);
}

// Global variable
let product;

/**
* Print in console the prodoct of product
* @param {number} num1 - number 1
* @param {number} num2 - number 2
*/
function calcProduct(num1, num2) {
    product = num1 * num2;
    console.log(`Il prodotto è ${product}`);
}

// Results of sum and product calculations
calcSum(2, 3);
calcProduct(3, 3);