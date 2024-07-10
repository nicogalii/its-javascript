/**
 * @file     main.js
 * @author   Nicolò Galizia
 * @description
 * 2.Book list
 * ● Create a complete webpage with a title, description and all other HTML tags
 * ● In the body add an h1 title of "My Book List"
 * ● In javascript, iterate through the array of books.
 *    ○ For each book, create HTML element with the book title and author and append it to the page
 *    ○ Use a ul and li to display the books
 *    ○ Add a url property to each book object that contains the cover image of the book
 *    ○ Add the image to the HTML using Javascript
 *    ○ Using javascript change the style of the book depending on whether you have read it or not
 * ● Add an external css file that applies after 5 seconds
 *    ○ Now change the style of the book depending on whether you have read it or not using both
 *      css and javascript (the CSS should use a different color for read books)
 */

// Create of the object books
let books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: 'https://picsum.photos/200/300'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: false,
    img: 'https://picsum.photos/200/300'
  },
  {
    title: 'L\'arte della vittoria',
    author: 'Phil knight',
    alreadyRead: true,
    img: 'https://picsum.photos/200/300'
  },
  {
    title: 'Padre ricco padre povero',
    author: 'Robert T. Kiyosaki',
    alreadyRead: true,
    img: 'https://picsum.photos/200/300'
  },
  {
    title: 'Never finished',
    author: 'David Goggins',
    alreadyRead: false,
    img: 'https://picsum.photos/200/300'
  },
];

for (let i = 0; i < books.length; i++) {

  let booksTitleAuthor = document.createElement("ul");

  if (books[i] === 0) {
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/300";
    document.body.appendChild(img);
  }
  booksTitleAuthor.innerHTML = `
      <li><strong>Titolo:</strong> ${books[i].title} <br> 
      <strong>Autore:</strong> ${books[i].author} <br>
      ${books[i].img}</li>
      `;
  document.body.appendChild(booksTitleAuthor);


  // Create a new img element and set its src attribute to a picture of you

}





// The external css file should be applied after 5 seconds
// setTimeout(() => {
//   let linkCss = document.createElement("link");
//   linkCss.rel = "stylesheet";
//   linkCss.href = "./css/style.css";
//   document.head.appendChild(linkCss);
// }, 5000);



