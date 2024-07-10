/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 7.Math library
 * ● Write a function called squareNumber that will take one argument (a
 * number), square that number, and return the result. It should also log a
 * string like "The result of squaring the number 3 is 9."
 * ● Write a function called halfNumber that will take one argument (a number),
 * divide it by 2, and return the result. It should also log a string like "Half of 5
 * is 2.5."
 * ● Write a function called percentOf that will take two numbers, figure out
 * what percent the first number represents of the second number, and return
 * the result. It should also log a string like "2 is 50% of 4."
 * ● Write a function called areaOfCircle that will take one argument (the
 * radius), calculate the area based on that, and return the result. It should also
 * log a string like "The area for a circle with radius 2 is 12.566370614359172."
 * ● Bonus: round the result so there are only two digits after the decimal
 */

/**
 * Console printing of square
 * @param {number} num - number
 */
function squareNumber(num) {
  let square = num * num;
  console.log(`Il quadrato di ${num} é ${square}`);
}

/**
 * Console printing of half
 * @param {number} num - number
 */
function halfNumber(num) {
  let half = num / 2;
  console.log(`La metà di ${num} é ${half}`);
}

/**
 * Console printing of half
 * @param {number} num - number
 */
function percentOf(num, num2) {
  let percent = (num / num2) * 100;
  console.log(`${num} é il ${percent}% di ${num2}`);
}

/**
 * Print in console the circle area
 * @param {number} radius - radius of the circle
 */
function calcArea(radius) {
  let area = 3.14 * radius * radius;
  console.log(`L'area è ${area}`);
}

// Return of the function
squareNumber(3);
halfNumber(5);
percentOf(2, 4);
calcArea(2);
