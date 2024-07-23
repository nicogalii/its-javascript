/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @description 
 */

document.addEventListener("DOMContentLoaded", function () {
    let image = document.querySelector("img"); // Reference to the cat image
    let direction = 1; // 1 means moving right, -1 means moving left
    image.style.left = "0px"; // Initialize the cat's starting position

    /**
     * Moves the cat continuously from left to right.
     */
    const catWalk1 = () => {
        let newPos = parseInt(image.style.left) + 10; // Calculate new position by adding 10 pixels

        // If the new position is beyond the right edge, restart from the left
        if (newPos > window.innerWidth - image.width) {
            newPos = 0;
        }

        // Update the position of the cat
        image.style.left = newPos + "px";
    };

    /**
     * Moves the cat back and forth across the screen.
     */
    const catWalk2 = () => {
        // Update the position based on the side
        let newPos = parseInt(image.style.left) + 10 * direction;

        // Set the new position of the cat
        image.style.left = newPos + "px";

        // Reverse direction if the cat reaches the right or left edge
        if (newPos > window.innerWidth - image.width - 1) {
            direction = -1;
        } else if (newPos < 0) {
            direction = 1;
        }
    };

    // Shedule the function after 50ms
    setInterval(catWalk2, 50);
});