/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 3.Grade master
 * - Write a function named assignGrade that:
 * - takes 1 argument, a number score.
 * -returns a grade for the score, either "A", "B", "C", "D", or "F".
 * Call that function for a few different scores and log the result to make sure it works.
 */

/**
* Print in console the score convert in A,B,C,D or F with if and else if
* @param {number} score - score
*/
function assignGrade(score) {

    if (score < 100 && score > 0) {

        if (score <= 100 && score >= 91) {
            console.log(`Il punteggio ${score} corrisponde ad A`);

        } else if (score <= 90 && score >= 81) {
            console.log(`Il punteggio ${score} corrisponde a B`);

        } else if (score <= 80 && score >= 71) {
            console.log(`Il punteggio ${score} corrisponde a B`);

        } else if (score <= 80 && score >= 71) {
            console.log(`Il punteggio ${score} corrisponde a B`);

        } else if (score <= 70 && score >= 60) {
            console.log(`Il punteggio ${score} corrisponde a D`);

        } else if (score <= 59) {
            console.log(`Il punteggio ${score} corrisponde a F`);
        }

    } else {
        console.log("Errore - Inserisci un valore da 0 a 100!");

    }
}

// Prints the three function calls to the console
assignGrade(50);
assignGrade(90);
assignGrade(10);
assignGrade(-1);
assignGrade(60);