## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

**Weekday with array**
-  Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
-  Write another function that does the same in Italian
-  Add a language parameter to the function that accepts ‘en’ or ‘it’ and outputs the day in the correct language


## Approach to solution

1. **Define the `getWeekDayEnglish` function**:
-  Returns the day of the week in English abbreviation based on the date parameter.

2. **Define the `getWeekDayItalian` function**:
-  Returns the day of the week in Italian abbreviation based on the date parameter.

3. **Define the `getWeekDay` function**:
-  Checks the lang argument to determine which language  use for returning the day of the week.
-  Returns the day of the week in the specified language (English or Italian) based on the date parameter.
-  Returns an error message if the language is not available.


## Files

* index.html
* main.js