/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 6.Easy multiplication
 * ● Write a for loop that will iterate from 0 to 10.
 * ● For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
 * ● Bonus: Use a nested for loop to show the tables for every multiplier from 1
 * to 10 (100 results total). 
 */

// for loop that calculates the product of the values ​​of ${i} from 0 to 10 by multiplying * 9
for (let i = 0; i <= 10; i = i + 1) {

    let product = i * 9;

    // Print in console the product
    console.log(`Il prodotto di ${i} * 9 è ${product}`);

}