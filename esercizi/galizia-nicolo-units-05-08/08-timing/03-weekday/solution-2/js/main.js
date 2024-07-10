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

function getWeekDayEnglish(date) {
  // Return of the day of the week in format "EN"
  return dayEN[date.getDay()];
}

function getWeekDayItalian(date) {
  // Return of the day of the week in format "IT"
  return dayIT[date.getDay()];
}

function getWeekDay(date, lang) {
  // Check if the lang is english
  if (lang === "en") {
    // Return of the day of the week in format "EN"
    return dayEN[date.getDay()];
    // Check if the lang is italian
  } else if (lang === "it") {
    // Return of the day of the week in format "IT"
    return dayIT[date.getDay()];
    // Return if the lag is differet by EN and IT
  } else {
    return `Lingua non disponibile! - ${lang}`;
  }
}

// Array of the days of the week in italian and english
let dayEN = ["SA", "MO", "TU", "WE", "TH", "FR", "SA"];

let dayIT = ["DOM", "LUN", "MAR", "MER", "GIO", "VEN", "SAB"];

// Function calls and testing of getWeekDayEnglish
console.log("GET WEEK DAY ENGLISH:");
let dateEnglish = new Date();
console.log(getWeekDayEnglish(dateEnglish));

dateEnglish = new Date("2004-06-07");
console.log(getWeekDayEnglish(dateEnglish));

// Function calls and testing of getWeekDayItalian
console.log("\n---------------------------------\n\nGET WEEK DAY ITALIAN:");

let dateItalian = new Date();
console.log(getWeekDayItalian(dateItalian));

dateItalian = new Date("2004-06-07");
console.log(getWeekDayItalian(dateItalian));

// Function calls and testing of getWeekDay
console.log("\n---------------------------------\n\nGET WEEK DAY:");

let date = new Date();
console.log(getWeekDay(date, "en"));

date = new Date();
console.log(getWeekDay(date, "fr"));

date = new Date();
console.log(getWeekDay(date, "it"));
