/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-21
 * @description 
 * 3.Baby processing
 * Using the babies array from the previous exercise:
 *  ● Write a getBabyOutfit() function that returns a description a baby's outfit
 *      ○ e.g "Lyla is wearing a blue shirt and red pants and a green hat"
 * ● Write a feedBaby() function that prints what a baby is eating.
 *      ○ e.g. "Lyla is eating food3, food1, food4 and food2"
 *      ○ All foods in favoriteFoods should appear but randomly each time the function is called
 * ● Run both function on all the babies
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

// Array of the color to the outfit
const shirtColors = ["blue", "green", "yellow", "red", "purple"];
const pantsColors = ["black", "grey", "blue", "white", "red"];
const shoesColors = ["white", "black", "brown", "pink", "yellow"];

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


/**
 * Function to get a description of a baby's outfit
 * @param {object} baby
 */
function getBabyOutfit(baby) {
    return `${baby.name} ha una maglietta ${baby.outfit.shirt}, un pantalone ${baby.outfit.pants} e le scarpe ${baby.outfit.shoes}.`;
}

/**
 * Function to insert the favorite foods of the baby
 * @param {object} baby
 */
function feedBaby(baby) {
    // Favorite foods of the baby
    return `${baby.name} mangia ${baby.favoriteFoods.join(',')}.`;
}

// Loop to insert the description on outfit and favorite foods of the babies
babies.forEach(baby => {
    console.log(getBabyOutfit(baby));
    console.log(feedBaby(baby));
    console.log(`--------------------------------`);
});
