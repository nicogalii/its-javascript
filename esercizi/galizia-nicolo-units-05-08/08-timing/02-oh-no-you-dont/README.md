## Author Details

* Name:  Nicolò Galizia
* Contact: nicolo.galizia@edu.itspiemonte.it


## Description

2. **Oh no you don’t**
-  Write a function “useful” that does something useful in Javascript
-  Schedule it to run after 10 seconds
-  Write another function that cancels the scheduling of the first function
-  Use the second function to cancel the first one after 5 seconds and output ‘function cancelled’ to the console


## Approach to solution

1. **Define the `useful` Function**: 
-  This function prints "Ciao mondo!" to the console.

2. **Define the `stopUseful` Function**: 
-  This function cancels the scheduled execution of `useful` by clearing the timeout and prints "Funzione annullata" to the console.

3. **Schedule the `useful` Function**:
-  Use `setTimeout` to schedule the `useful` function to run after 10 seconds.

4. **Schedule the `stopUseful` Function**: 
-  Use `setTimeout` to schedule the `stopUseful` function to run after 5 seconds.



## Files

* index.html
* main.js