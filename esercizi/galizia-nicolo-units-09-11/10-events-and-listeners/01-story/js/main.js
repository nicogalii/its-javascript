/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @description 
 * ● Add an event listener to the button so that it calls a makeStory function when clicked.
 * ● In the makeStory function, retrieve the current values of the form input elements, 
 *   make a story from them, and output that in the story div (like "Joseph really likes pink cucumbers.")
 */

// Retrieve of the IDs noun, adjective and person
let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let person = document.getElementById('person');

/**
 * Function who retrive the curret values of the from input elements 
 * and create the text message 
 */
function makeStory() {
    // Retrieve of the ID story
    let story = document.getElementById('story');

    // Retrieve values from input elements
    let nounValue = noun.value.trim();
    let adjectiveValue = adjective.value.trim();
    let personValue = person.value.trim();

    // Check if the values are insert
    if (nounValue === '' || adjectiveValue === '' || personValue === '') {
        // Create the text of the error message when the values aren't insert
        let errorTextStory = story.textContent = `Insert the values!`;
        story.appendChild(errorTextStory);
    } else {
        // Create the story text
        let textStory = story.textContent = `${personValue} really likes ${adjectiveValue} ${nounValue}`;
        story.appendChild(textStory);
    }

}

// Add event listener to the button to call makeStory when clicked
let button = document.getElementById('gen-button');
button.addEventListener('click', makeStory);