/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 4.Coffee supply calculator
 * ● Write a function named calculateSupply that:
 * ○ takes 2 arguments: age, amount per day.
 * ○ calculates the amount consumed for rest of the life (based on a constant max age).
 * ● outputs the result to the screen like so: "You will need NN cups of coffee to last you until the age of X"
 * ● Call that function three times, passing in different values each time
 * ● Bonus:
 * ○ Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)
 * ○ Round the result to a round number
 */

/**
* Print in console age_maximum and coffee_drunk_to_day
* @param {number} age - age of a person
* @param {number} coffee_drunk_to_day - coffee drunk a day by one person
*/
function calculateSupply(age, coffee_drunk_to_day) {
    const age_maximum = 90;
    let coffee_drunk_in_life = (age_maximum - age) * 365 * coffee_drunk_to_day
    console.log(`Ti serviranno ${coffee_drunk_in_life} tazze di caffè fino all'età di ${age_maximum}`);
}

// Result of the function
calculateSupply(18, 2);
calculateSupply(50, 1);
calculateSupply(89, 3);