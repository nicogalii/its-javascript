/**
 * @file       main.js
 * @author     Nicolò Galizia
 *
 * 1.The dishwasher
   Create a simulation of a dishwasher system using two stacks of dishes
      ● one stack represents dirty dishes, and the other represents clean dishes
      ● the dirty stack has a random number of plates 10 - 50
      ● useful functions
         ○ washDish - moves a dish from the dirty stack to the clean stack
         ○ displayStacks - displays the current state of both stacks in the console
         ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
 */

let stackPlatesDirty = [];
let stackPlatesClean = [];

/**
 * Set number of plate to insert on stack
 */
function insertPlatedStack() {
   let numRandom = Math.random() * 40 + 10;
   for (let i = 0; i < numRandom; i++) {
      stackPlatesDirty.push(`plate${i + 1}`);
   }
}

/**
 * Move the plate of the stack plate dirty to stack plate clean
 */
function washDish() {
   stackPlatesClean.push(stackPlatesDirty.pop());
}

/**
 * Print in console the stacks
 */
function displayStacks() {
   console.log(`PIATTI SPORCHI:`);
   console.log(stackPlatesDirty);
   console.log(`PIATTI SPORCHI:`);
   console.log(stackPlatesClean);
}

/**
 * Impost of the set interval to simulation
 */
function runSimulation() {
   insertPlatedStack(); // Initialize the dirty stack
   let intervalID = setInterval(() => {
      if (stackPlatesDirty.length > 0) {
         washDish();
         displayStacks();
      } else {
         // Stop the simulation when all dishes are clean
         clearInterval(intervalID);
         console.log("TUTTI I PIATTI SONO PULITI!");
      }
   }, 2000);
}

// Start the simulation
runSimulation();
