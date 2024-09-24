/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-20
 * @description 
 * 1.DogSpeak
 * Add a method to the String prototype called dogSpeak() that works as follows:
 * 
 * let s = 'We like to learn';
 * s.dogSpeak();
 * 'Dogs are smart'.dogSpeak();
 * 
 * // Console output
 * // We like to learn Woof!
 * // Dogs are smart Woof!
 * 
 * Think about the following question
 * Is it a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc?
 */

/**
 * Append ' Woof!' to the string with String prototype
*/
String.prototype.dogSpeak = function () {
    return `${this} Woof!`;
};

let s = 'We like to learn';
console.log(s.dogSpeak());  // Output: We like to learn Woof!

console.log('Dogs are smart'.dogSpeak());  // Output: Dogs are smart Woof!
