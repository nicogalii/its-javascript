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
// Array of object books
let books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: 'https://picsum.photos/200/300?1'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: false,
    img: 'https://picsum.photos/200/300?2'
  },
  {
    title: 'L\'arte della vittoria',
    author: 'Phil Knight',
    alreadyRead: true,
    img: 'https://picsum.photos/200/300?3'
  },
  {
    title: 'Padre ricco padre povero',
    author: 'Robert T. Kiyosaki',
    alreadyRead: true,
    img: 'https://picsum.photos/200/300?4'
  },
  {
    title: 'Never finished',
    author: 'David Goggins',
    alreadyRead: false,
    img: 'https://picsum.photos/200/300?5'
  },
];

let bookList = document.getElementById('book-list');
let ul = document.createElement('ul');

// Loop forEach of the array of object books
books.forEach(book => {
  let li = document.createElement('li');
  li.innerHTML = `<p><strong>Title:</strong> ${book.title} </p>
                  <p><strong>Author:</strong> ${book.author}</p>
                  <img src="${book.img}" alt="${book.title} cover">`;
  if (book.alreadyRead) {
    li.classList.add('read');
  } else {
    li.classList.add('unread');
  }
  ul.appendChild(li);
});

bookList.appendChild(ul);

// Apply external CSS after 5 seconds
setTimeout(() => {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './css/style.css';
  document.head.appendChild(link);
}, 5000);