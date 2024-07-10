/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 5.Odd or even
 * ● Write a for loop that will iterate from 0 to 20.
 * ● For each iteration, it will check if the current number is odd or even, and
 * report that to the screen (e.g. "2 is even").
 */

// for loop that identifies even-odd numbers from 0 to 20
for (let i = 0; i <= 20; i = i + 1) {

    if (i % 2 == 0) {
        // Print in console
        console.log(`${i} = PARI`);

    } else {
        // Print in console
        console.log(`${i} = DISPARI`);

    }
}

