/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * Create an object to hold information on your favorite recipe. It should have
   properties for title (a string), servings (a number), and ingredients (an
   array of strings).
   ● On separate lines (one console.log statement for each), log the recipe
   information
   Bonus: Create an array that holds several recipes and log them all
 */

// Object of the my favorite recipe
let fivoriteRecipe = {
  title: "pizza",
  servings: 8,
  ingredients: [
    "farina",
    "acqua",
    "olio",
    "sale",
    "lievito",
    "passata di pomodoro",
    "mozzarella",
  ],
};

// Print the object 'fivoriteRecipe' in console
console.log(
  `La ${fivoriteRecipe.title} é fatta da ${fivoriteRecipe.servings} ingredienti: ${fivoriteRecipe.ingredients}`
);
