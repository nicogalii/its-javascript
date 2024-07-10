/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 3.Weekday
   ● Write a function getWeekDay(date) to show the weekday in short format: 
   ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
   ● Write another function that does the same in Italian
   ● Add a language parameter to the function that accepts ‘en’ or ‘it’ and 
   outputs the day in the correct language
 */

/**
 * Function used to print the day of the week on console in eng
 * @param {object} date
 */
function getWeekDayEnglish(date) {
  let day = date.getDay();

  // Print of the day of the week in format "EN"
  switch (true) {
    case day === 1:
      console.log("MO");
      break;

    case day === 2:
      console.log("TU");
      break;

    case day === 3:
      console.log("WE");
      break;

    case day === 4:
      console.log("TH");
      break;

    case day === 5:
      console.log("FR");
      break;

    case day === 6:
      console.log("SA");
      break;

    case day === 0:
      console.log("SU");
      break;
  }
}

/**
 * Function used to print the day of the week on console in ita
 * @param {object} date
 */
function getWeekDayItalian(date) {
  let dayOfWeek = date.getDay();

  // Print of the day of the week in format "IT"
  switch (true) {
    case dayOfWeek === 1:
      console.log("LUN");
      break;

    case dayOfWeek === 2:
      console.log("MAR");
      break;

    case dayOfWeek === 3:
      console.log("MER");
      break;

    case dayOfWeek === 4:
      console.log("GIO");
      break;

    case dayOfWeek === 5:
      console.log("VEN");
      break;

    case dayOfWeek === 6:
      console.log("SAB");
      break;

    case dayOfWeek === 0:
      console.log("DOM");
      break;
  }
}

/**
 * Function used to print the day of the week on console in ita or eng
 * @param {object} date
 * @param {string} lang - Is the language desiderated by user
 */
function getWeekDay(date, lang) {
  let dayOfWeek = date.getDay();
  // Check if the lenguage is en
  if (lang === "en") {
    // Print of the day of the week in format "EN"
    switch (true) {
      case dayOfWeek === 1:
        console.log("MO");
        break;

      case dayOfWeek === 2:
        console.log("TU");
        break;

      case dayOfWeek === 3:
        console.log("WE");
        break;

      case dayOfWeek === 4:
        console.log("TH");
        break;

      case dayOfWeek === 5:
        console.log("FR");
        break;

      case dayOfWeek === 6:
        console.log("SA");
        break;

      case dayOfWeek === 0:
        console.log("SU");
        break;
    }
    // Check if the lenguage is it
  } else if (lang === "it") {
    // Print of the day of the week in format "IT"
    switch (true) {
      case dayOfWeek === 1:
        console.log("LUN");
        break;

      case dayOfWeek === 2:
        console.log("MAR");
        break;

      case dayOfWeek === 3:
        console.log("MER");
        break;

      case dayOfWeek === 4:
        console.log("GIO");
        break;

      case dayOfWeek === 5:
        console.log("VEN");
        break;

      case dayOfWeek === 6:
        console.log("SAB");
        break;

      case dayOfWeek === 0:
        console.log("DOM");
        break;
    }
  } else {
    console.log(`Lingua non disponibile! - ${lang}`);
  }
}

// Function calls and testing of getWeekDayEnglish
console.log("GET WEEK DAY ENGLISH:");
let dateEnglish = new Date();
getWeekDayEnglish(dateEnglish);

dateEnglish = new Date("2004 6 7");
getWeekDayEnglish(dateEnglish);

// Function calls and testing of getWeekDayItalian
console.log("\n---------------------------------\n\nGET WEEK DAY ITALIAN:");

let dateItalian = new Date();
getWeekDayItalian(dateItalian);

dateItalian = new Date("2004 6 7");
getWeekDayItalian(dateItalian);

// Function calls and testing of getWeekDay
console.log("\n---------------------------------\n\nGET WEEK DAY:");

let date = new Date();
getWeekDay(date, "en");

date = new Date();
getWeekDay(date, "fr");

date = new Date();
getWeekDay(date, "it");
