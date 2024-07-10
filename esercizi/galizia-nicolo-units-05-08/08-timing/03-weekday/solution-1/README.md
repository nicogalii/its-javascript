## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

**Weekday with method swich**
-  Write a function getWeekDay(date) to show the weekday in short format: 
   ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
-   Write another function that does the same in Italian
-  Add a language parameter to the function that accepts ‘en’ or ‘it’ and outputs the day in the correct language


## Approach to solution

1. **Define the `getWeekDayEnglish` Function**:
- Passed a `date` object as an argument.
- Uses `getDay()` to get the day of the week.
- Prints the corresponding English abbreviation using a switch method.

2. **Define the `getWeekDayItalian` Function**:
-  Passed a date object as an argument.
-  Uses `getDay()` to get the day of the week.
-  Prints the corresponding Italian abbreviation using a switch method.

3. **Define the getWeekDay Function**:
-  Passed a `date` object and a lang string as arguments.
-  Uses `getDay()` to get the day of the week.
-  Checks the lang argument to determine which language to use for printing.
-  Uses a switch method to print the appropriate abbreviation based on the language.
-  Prints an error message if the language is not available.


## Files

* index.html
* main.js