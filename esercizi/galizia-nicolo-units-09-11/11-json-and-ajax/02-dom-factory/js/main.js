/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @description 
 */

const carsJSON = `
[
{
     "make": "Fiat",
     "model": "Panda",
     "year": 2010,
     "isElectric": false,
     "features": ["Aria condizionata", "Cruise Control", "Bluetooth"],
     "owner": {
         "name": "Giovanni",
         "surname": "Rossi",
         "license": "DY214KM"
     },
     "previousOwners": null
     },
     {
     "make": "Abarth",
     "model": "500 Abarth",
     "year": 2019,
     "isElectric": false,
     "features": ["Bluetooth", "Sistema di navigazione"],
     "owner": {
         "name": "Nicolò",
         "surname": "Galizia",
         "license": "FG005TD"
     },
     "previousOwners": null
     },
     {
     "make": "Tesla",
     "model": "Model S",
     "year": 2021,
     "isElectric": true,
     "features": ["Pilota automatico", "Aria condizionata"],
     "owner": {
         "name": "Antonio",
         "surname": "Di Gennaro",
         "license": "JJ429AA"
     },
     "previousOwners": null
     },
     {
     "make": "Alfa romeo",
     "model": "Mito",
     "year": 2020,
     "isElectric": false,
     "features": ["Air Conditioning", "Cruise Control", "Bluetooth"],
     "owner": {
         "name": "Stefano",
         "surname": "Cherio",
         "license": "FL241ED"
     },
     "previousOwners": null
     },
     {
     "make": "Volkswagen",
     "model": "Golf",
     "year": 2019,
     "isElectric": false,
     "features": ["Sistema di navigazione", "Cruise Control", "Bluetooth"],
     "owner": {
         "name": "Nicolò",
         "surname": "Galizia",
         "license": "DY214KM"
     },
     "previousOwners": null
     }
]`;

/**
* JSON string representing factory details with various attributes.
*/
const factoryJSON = `
{
 
  "name": "Fiat",
  "location": "Torino, Italia",
  "established": 1899,
  "departments": ["Assembly", "Painting", "Quality Control"],
  "manager": {
    "name": "Giovanni",
    "surname": "Agnelli"
  },
  "recentUpgrade": null

}
`;



// Parse the JSON strings into JavaScript objects
const cars = JSON.parse(carsJSON);
const factory = JSON.parse(factoryJSON);

/**
 * Creates a list item element for a given key and value.
 * @param {string} key - The key or label for the list item.
 * @param {any} value - The value associated with the key.
 */
function createListItem(key, value) {
    const li = document.createElement("li");
    if (Array.isArray(value)) {
        li.textContent = `${key}: ${value.join(", ")}`;
    } else if (typeof value === "object" && value !== null) {
        li.textContent = `${key}: ${JSON.stringify(value)}`;
    } else if (value === null) {
        li.textContent = `${key}: Not present`;
    } else {
        li.textContent = `${key}: ${value}`;
    }
    return li;
}

/**
 * Renders the details of a single object.
 * @param {string} containerId - The ID of the container element to append the list to.
 * @param {Object} obj - The object whose details are to be rendered.
 */
function renderObject(containerId, obj) {
    const container = document.getElementById(containerId);
    const ul = document.createElement("ul");
    const keys = Object.keys(obj); // Get all keys from the object

    keys.forEach((key) => {
        const value = obj[key];
        ul.appendChild(createListItem(key, value));
    });

    container.appendChild(ul);
}

/**
 * Renders a list of objects into a nested list.
 * @param {string} containerId - The ID of the container element to append the list to.
 * @param {Array<Object>} list - The array of objects to render.
 */
function renderObjectList(containerId, list) {
    const container = document.getElementById(containerId);
    const ul = document.createElement("ul");

    list.forEach((obj, index) => {
        const li = document.createElement("li");
        li.textContent = `Car ${index + 1}:`;
        const ulNested = document.createElement("ul");

        const keys = Object.keys(obj); // Get all keys from the object
        keys.forEach((key) => {
            const value = obj[key];
            ulNested.appendChild(createListItem(key, value));
        });

        li.appendChild(ulNested);
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// Render car and factory details to the DOM
renderObjectList("car-list", cars);
renderObject("factory-list", factory);


