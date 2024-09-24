/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-18
 * @description 
 * 1.Soundwave
 * Given the following array
 * let noisesArray = ['quack', 'sneeze', 'boom'];
 * Produce the following array, then print it to the console
 * ['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!
 * ','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!']
 */

// Array
let noisesArray = ['quack', 'sneeze', 'boom'];

let resultArray = [];

// Loop 
noisesArray.forEach((word) => {
    for (let i = 0; i < word.length; i++) {

        let modifiedWord = word.slice(0, i) + word[i].toUpperCase() + word.slice(i + 1) + '!'.repeat(i + 1);
        resultArray.push(modifiedWord);
    }
});

// Output
console.log(resultArray);