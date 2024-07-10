## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

1. **Slow list with setTimeout**
  - Create an array that holds a list of 30 items (food, books, etc.)
  - Print one item of the list every second until the list is completely printed
    - Use setInterval to achieve this goal
    - Do the same thing using setTimeout


## Approach to solution

1. **Define the `arrayOfItems`**: 
  - This array contains 30 different.

2. **Define `printItems` function**:
  - Define a function `printItems` that takes an item as its argument and prints the item to the console.

3. **Scheduling with `setTimeout`**:
  - Use a loop to iterate through each item in the `arrayOfItems`.
  - For each iteration, schedule the `printItems` function to run with a delay using `setTimeout`.
  - Calculate the delay for each item by multiplying the index (plus one) by 1000 milliseconds, ensuring each item is printed one second after the previous one.



## files

* index.html
* main.js