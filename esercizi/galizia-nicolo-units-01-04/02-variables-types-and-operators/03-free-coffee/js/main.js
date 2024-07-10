/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 3.Free coffee
 * ● Store your current age into a variable.
 * ● Store a maximum age into a variable.
 * ● Store the amount of coffee you drink per day (as a number).
 * ● Calculate how much coffee you would drink for the rest of your life.
 * ● Output the result to the screen like so: "You will need NN cups of coffee to last you until the ripe old age of X".
 */

// Declaration of variables
let current_age = 19;
let maximum_age = 90;
let coffee_drunk_to_day = 3;
let coffee_drunk_in_life = (maximum_age - current_age) * 365 * coffee_drunk_to_day;

// Print in console
console.log('La stima di caffe bevuti tra i', current_age, 'e i', maximum_age, 'anni sono:', coffee_drunk_in_life);