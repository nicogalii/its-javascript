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
 * 
 * 2.Bambini
 *  ● Crea una serie vuota di bambini
 *  ● Ogni bambino dovrebbe avere le seguenti proprietà
 *      ○ "nome" (una stringa) 
 *      ○ "mesi" (età in mesi come numero) 
 *      ○ "rumori" (un array di stringhe) 
 *      ○ "favoriteFoods" (un array di stringhe) 
 *  ● Aggiungi 4 bambini diversi all'array utilizzando quanti più modi possibili
 *  ● Scorrere le coppie chiave-valore di stampa dell'array, ad esempio [nome:”Lyla”]
 *  ● Ora aggiungi una proprietà "vestito" a ciascun bambino nell'array
 *      ○ L'outfit deve descrivere almeno 3 parti del proprio abbigliamento utilizzando proprietà diverse, ad es 
 *        esempio, "camicia": "blu"
 *      ○ Stampa di nuovo ogni bambino con il suo vestito in un oggetto ben formattato.
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
            // the array becomes a string and print
            console.log(`[${key}: "${baby[key].join(", ")}"]`);
        } else {
            // print the value normally
            console.log(`[${key}: "${baby[key]}"]`);
        }
    }
    // Separator between babies
    console.log('-------------------------');
});

// Add an "outfit" property to each baby
babies.forEach(baby => {
    baby.outfit = {
        shirt: "blue",
        pants: "red",
        shoes: "black"
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
        console.log(`  ${key}: ${baby.outfit[key]}`);
    }
});