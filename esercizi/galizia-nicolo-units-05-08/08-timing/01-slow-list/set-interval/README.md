## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

1. **Slow list with setInterval**
  - Create an array that holds a list of 30 items (food, books, etc.)
  - Print one item of the list every second until the list is completely printed
    - Use setInterval to achieve this goal
    - Do the same thing using setTimeout


## Approach to solution

1. **Define the `arrayOfItems`**: 
  - This array contains 30 different items.

2. **Initialize the Global Variable `i`**: 
  - This variable keeps track of the current item's index.

3. **Define the `printItems` Function**: 
  - This function prints the item in the array at index `i` and increments `i` of one. 
  - If `i` is equal to the length of the array, stop the interval.

4. **Use `setInterval`**: 
  - Schedule the `printItems` function to run every second.


## files

* index.html
* main.js