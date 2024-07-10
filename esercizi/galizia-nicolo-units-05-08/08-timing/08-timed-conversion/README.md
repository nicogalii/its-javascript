## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

**Timed conversion**
-   We will modify ‘Temperature conversion’ exercise from the lesson about
   functions
-   Call celsiusToFahrenheit on temperatures from 0 to 100 so that one temperature is printed to the console every second
    -   Use setInterval to achieve this goal.
    -   Do the same thing using setTimeout.


## Approach to solution

1. **Define a global variable `i`**:
-   Used to keep track of the number of iterations.

2. **Define `celsiusToFahrenheit` Function**: 
-   This function converts the temperature from Celsius to Fahrenheit
-   Prints the result to the console.
-   Stop intervall when variable `i` is equal a 100.

3. **Define `setInterval`**:
-   Impost a delay of one second after print the `celsiusToFahrenheit` functio.


## Files

* index.html
* main.js