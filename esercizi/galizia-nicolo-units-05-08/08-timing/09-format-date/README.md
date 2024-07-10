## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

**Format date**:
-   Write a function formatDate(date) that accepts a date and outputs it as follows:
-   If less than a second has passed since the date, output "right now"
-   If less than a minute has passed since the date, output "n sec. ago"
-   If less than an hour has passed since the date, output "m min. ago"
-   Otherwise, output the date in this format "DD.MM.YY HH:mm"
    -   e.g. 17.04.16 10:00


## Approach to solution

1. **Define `formatDate` function**:
-   Initialize the current data when function is invoked.
-   Suddivision of the date to identify `year`, `month`, `day`, `hours` and `minutes`.
-   Trasformation of the milliseconds of the different by `courrentDate` and `date`.
-   Check of the different second between two date.
-   Print the message in console.
-   Impost a `clearInterval` when the hours overcome the 24 hours.

2. **Define `setInterval`**:
-   Impost a delay of the one second.


## Files

* index.html
* main.js