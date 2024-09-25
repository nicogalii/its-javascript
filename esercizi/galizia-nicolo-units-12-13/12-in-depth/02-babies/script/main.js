/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-19
 * @description 
 * 2.Babies
 *  ● Create an empty array of babies
 *  ● Each baby should have the following properties
 *      ○ "name" (a string) 
 *      ○ "months" (age in months as number) 
 *      ○  "noises" (an array of strings) 
 *      ○  "favoriteFoods" (an array of strings) 
 *  ● Add 4 different babies to the array using as many different ways as possible
 *  ● Iterate through the array printing key and value pairs e.g [name:”Lyla”]
 *  ● Now add an "outfit" property to each baby in the array
 *      ○ Outfit should describes at least 3 parts of their clothing using different properties, for 
 *        example, "shirt": "blue"
 *      ○ Print each baby again with their outfit in a nicely formatted object.
 */

// Array of objects babies
let babies = [];

// Add babies in array
babies.push({
    name: "Luca",
    months: 5,
    noises: ["sium", "gaa"],
    favoriteFoods: ["latte", "banana"]
}, {
    name: "Matilde",
    months: 10,
    noises: ["uee", "goo"],
    favoriteFoods: ["pane", "cioccolato"]
});

babies.unshift({
    name: "Paolo",
    months: 3,
    noises: ["goo", "sium"],
    favoriteFoods: ["cereali", "latte"]
}, {
    name: "Noemi",
    months: 5,
    noises: ["blee", "shh"],
    favoriteFoods: ["salame", "pastina"]
});

// Iterate and print "key-value" pairs of each object
babies.forEach(baby => {
    for (let key in baby) {
        // Check is an array
        if (Array.isArray(baby[key])) {
            // The array becomes a string and print
            console.log(`[${key}: "${baby[key].join(", ")}"]`);
        } else {
            // Print the value normally
            console.log(`[${key}: "${baby[key]}"]`);
        }
    }
    // Separator between babies
    console.log('-------------------------');
});

// Array of the color to the outfit
const shirtColors = ["blu", "verde", "giallo", "rosso", "viola"];
const pantsColors = ["nero", "grigio", "blu", "bianco", "rosso"];
const shoesColors = ["bianco", "nero", "marrone", "rosa", "giallo"];

// Function to get a random color from an array
function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Add a random "outfit" property to each baby
babies.forEach(baby => {
    baby.outfit = {
        shirt: getRandomColor(shirtColors),
        pants: getRandomColor(pantsColors),
        shoes: getRandomColor(shoesColors)
    };
});

console.log("---------------------------------------------")
console.log("------------------ BABIES -------------------")
console.log("---------------------------------------------")

// Print each baby with formatted
babies.forEach(baby => {
    // Separator between babies
    console.log('-------------------------');
    console.log(`Baby: ${baby.name}`);
    console.log(`Age: ${baby.months} months`);
    console.log(`Noises: ${baby.noises.join(", ")}`);
    console.log(`Favorite Foods: ${baby.favoriteFoods.join(", ")}`);
    console.log("Outfit:");
    for (let key in baby.outfit) {
        // Output
        console.log(`  ${key}: ${baby.outfit[key]}`);
    }
});