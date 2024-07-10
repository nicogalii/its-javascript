/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 2.Universal Translator
 * ● Write a function named helloWorld that:
 * ○ takes 1 argument, a language code (e.g. "es", "de", "en")
 * ○ returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
 * ● Call that function for each of the supported languages and log the result to make sure it works.
 */

/**
* Print in console the massage with a language code whit aa swith
* @param {string} language_code - language code
*/
function helloWorld(language_code) {

    let message;

    switch (language_code) {

        case 'es':
            message = "Hola Mundo!";
            break;

        case 'fr':
            message = "Bonjour le monde!";
            break;

        case 'en':
            message = "Hello World!";
            break;
        default:
            message = 'Hello World!';
    }
    console.log(message);
}

// Prints the three function calls to the console
helloWorld('en');
helloWorld('fr');
helloWorld('es');