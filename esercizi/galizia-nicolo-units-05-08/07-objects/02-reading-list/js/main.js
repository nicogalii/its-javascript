/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 2.Reading list
   ● Create an array of objects, where each object describes a book and has
   properties for the title (a string), author (a string), and alreadyRead (a
   boolean indicating if you read it yet).
   ● Iterate through the array of books. For each book, log the book title and
   book author like so: "The Hobbit by J.R.R. Tolkien".
   ● Now use an if/else statement to change the output depending on whether
   you read it yet or not. If you read it, log a string like 'You already read "The
   Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
   "The Lord of the Rings" by J.R.R. Tolkien.'
 */





// Objet of array whit information of the books
let book =
{
  title: 'Il piccolo principe',
  author: 'Antoine de Saint-Exupéry',
  alreadyRead: true
};

// Print the information of the object 'book'
console.log(`${book.title} di ${book.author}`);

// Objet of array whit information of the books
let books = [
  //  Book 1
  {
    title: 'Il piccolo principe',
    author: 'Antoine de Saint-Exupéry',
    alreadyRead: true
  },

  //  Book 2
  {
    title: 'L\'arte della guerra',
    author: 'Sun Tzu',
    alreadyRead: false
  },
  //  Book 3
  {
    title: 'Il Signore degli Anelli',
    author: 'John Ronald Reuel Tolkien',
    alreadyRead: false
  }
];

// Loop for to select the information contain in the array
for (let i = 0; i < books.length; i++) {
  // Select the information in 'books' and insert in book
  let oneBook = books[i];
  // Chack if the book was read or not
  if (oneBook.alreadyRead === true) {
    // Print the information of the object
    console.log(`Tu hai letto "${oneBook.title}" di ${oneBook.author}`);
  } else {
    // Print the information of the object
    console.log(`Tu NON hai letto "${oneBook.title}" di ${oneBook.author}`);
  }
}