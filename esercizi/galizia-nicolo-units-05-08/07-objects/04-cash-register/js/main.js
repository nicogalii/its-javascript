/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 4.Cash register
   ● Write a function called cashRegister that takes a shopping cart object.
   ● The object contains item names and prices (itemName: itemPrice).
   ● The function returns the total price of the shopping cart, e.g. :
   // Input
   let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
   };
   // Output
   cashRegister(cartForParty)); // 60.55
 */

/**
 * function used to print the total shopping in the cart on console
 * @param {object} cartForParty - A database of products
 */
function cashRegister(cartForParty) {
  let arrayCartForParty = Object.keys(cartForParty);

  let cashOut = 0;
  for (let i = 0; i < arrayCartForParty.length; i++) {
    cashOut += +cartForParty[arrayCartForParty[i]];
  }
  console.log(`Il totale del carrello è ${cashOut}€`);
}

// Object with items and their price
let cartForParty = {
  banana: "1.25",
  fazzoletto: "0.99",
  maglietta: "25.01",
  mela: "0.60",
  bracciale: "10.34",
  carne: "22.36",
};
// Function calls and testing
cashRegister(cartForParty); // Il totale del carrello è 60.55€
