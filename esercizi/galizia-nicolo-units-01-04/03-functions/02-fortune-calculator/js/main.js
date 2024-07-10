/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 2.Fortune calculator
 * ● Write a function named tellFortune that:
 * ○ Takes 4 arguments: number of children, partner's name, geographic location, job title.
 * ○ outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
 * ● Call that function 3 times with 3 different values for the arguments
 */

/**
* Print in console number_children, partner_name, geographic_location, work
* @param {number} number_children - number of children
* @param {string} partner_name - name of the partner
* @param {string} geographic_location - place of work
* @param {string} work - type of work
*/
function tellFortune(number_children, partner_name, geographic_location, work) {
    console.log(`Sarai un ${work} a ${geographic_location}, e sarai sposato/a con ${partner_name} con ${number_children} figli.`);
}

// Insertion of the function values
tellFortune(2, "Emma", "New York", "avvocato");
tellFortune(3, "Michael", "Londra", "medico");
tellFortune(1, "Sophia", "Parigi", "chef");