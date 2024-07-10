/**
 * @file     main.js
 * @author   Nicolò Galizia
 *
 * 1.About me
   ● Add an external javascript file called main.js
   ● In JavaScript:
    ○ Change the body style so it has a font-family of "Arial, sans-serif"
    ○ Replace each of the spans (nickname, favorites, hometown) with your own information
    ○ Iterate through each li and change the class to "list-item"
    ○ Create a new img element and set its src attribute to a picture of you
    ○ Append that element to the page
   ● Add an external css file using Javascript
    ○ The external css file should make items with the .list-item class white, bold and with an
   orange background
    ○ The external css file should be applied after 4 seconds
 */

// Change the body style so it has a font-family of "Arial, sans-serif"
const body = document.body;
body.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans (nickname, favorites, hometown) with my informations
const nickname = document.getElementById("nickname");
nickname.textContent = "Nico";

const favorites = document.getElementById("favorites");
favorites.textContent = "Calcio";

const hometown = document.getElementById("hometown");
hometown.textContent = "Torino";

// Iterate through each li and change the class to "list-item"
const listItem = document.getElementsByTagName("li");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].classList.add("list-item");
}

// Create a new img element and set its src attribute to a picture of you
const img = document.createElement("img");
img.src = "https://picsum.photos/200/300";

// Append that element to the page
document.body.appendChild(img);

// The external css file should be applied after 4 seconds
setTimeout(() => {
  let linkCss = document.createElement("link");
  linkCss.rel = "stylesheet";
  linkCss.href = "./css/style.css";
  document.head.appendChild(linkCss);
}, 4000);



