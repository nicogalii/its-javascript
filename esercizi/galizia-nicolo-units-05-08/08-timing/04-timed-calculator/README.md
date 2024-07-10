## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

**Timed calculator**
-  We will modify ‘Calculator’ exercise from the lesson about functions
-  Rewrite the last function that performs all 4 operations so that there is a delay of 3 seconds between one operation and the next


## Approach to solution

1. **Define `operations` function**:
-  This function passed two numbers as input parameters (`num` and `num2`) and performs a series of calculations using nested setTimeout functions.

2. **Define `halfNumber` function**:
-  Pass the first number (`num`) as input.
-  Calculates the half of num.
-  Logs the result to the console.
-  Schedules the `squareNumber` function to execute after 3 seconds.

3. **Define `squareNumber` function**:
- Pass the first number (`num`) as input.
-  Calculates the square of num.
-  Logs the result to the console.
-  Schedules the `calcArea` function to execute after 3 seconds.

4. **Define `calcArea` function**:
-  Pass the first number (`num`) as input.
-  Calculates the area of a circle with the radius equal to num.
-  Logs the result to the console.
-  Schedules the `percentOf` function to execute after 3 seconds.

5. **Define `percentOf` function**:
-  Pass the numbers (`num` and `num2`) as input.
-  Calculates the percentage of num compared to num2.
-  Logs the result to the console.


## Files

* index.html
* main.js