/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-18
 * @description 
 */

let noisesArray = ['quack', 'sneeze', 'boom'];

let resultArray = [];

noisesArray.forEach((word) => {
    for (let i = 0; i < word.length; i++) {

        let modifiedWord = word.slice(0, i) + word[i].toUpperCase() + word.slice(i + 1) + '!'.repeat(i + 1);
        resultArray.push(modifiedWord);
    }
});

console.log(resultArray);