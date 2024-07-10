/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 3.Dog age calculator
 * Calculate a puppy’s age in dog years
 * ● Write a function named calculateDogAge that:
 * ○ takes 1 argument: the dog's age in human years
 * ○ calculates the dog's age based on the conversion rate of 1 human year to 7 dog years
 * ○ outputs the result to the screen like so: "Your dog is NN years old in dog years!"
 * ● Call the function three times with different sets of values
 * ● Bonus:
 * ○ Add another argument to the function that takes the conversion rate of human to dog years
 */

/**
* Console printing the conversion of human age to dog age
* @param {number} age_dog - age of dog in human years
*/
function calculateDogAge(age_dog) {
    let age_conversion = 7;
    let canine_age = age_dog * age_conversion;
    console.log(`Il tuo cane ha ${canine_age} anni in anni canini!`);

}

/**
* Console printing the conversion of the dog age into human age
* @param {number} age_dog - age of the dog in canine years
*/
function calculateHumanAge(age_dog) {
    let age_conversion = 7;
    let human_age = age_dog / age_conversion;
    console.log(`Il tuo cane ha ${human_age} anni in anni umani!`);

}

// Conversion human age into dog age
calculateDogAge(1);
calculateDogAge(5);
calculateDogAge(2);

// Conversion dog age into human age
calculateHumanAge(7);