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
     * When the cat reaches the right edge, it restarts from the left edge.
     */
    const catWalk1 = () => {
        let newPos = parseInt(image.style.left) + 10; // Calculate new position by adding 10 pixels

        // If the new position is beyond the right edge, restart from the left
        if (newPos > window.innerWidth - image.width) {
            newPos = 0;
        }

        image.style.left = newPos + "px"; // Update the cat's position
    };

    /**
     * Moves the cat back and forth across the screen.
     * Reverses direction when the cat reaches either the left or right edge.
     */
    const catWalk2 = () => {
        let newPos = parseInt(image.style.left) + 10 * direction; // Update position based on direction

        image.style.left = newPos + "px"; // Set the new position

        // Reverse direction if the cat reaches the right or left edge
        if (newPos > window.innerWidth - image.width - 1) {
            direction = -1;
        } else if (newPos < 0) {
            direction = 1;
        }
    };

    setInterval(catWalk2, 50);
});