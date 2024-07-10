3.Cut me up
● In the exercise folder create a .txt or .doc or .md file in which you explain
the difference between the following array methods:
○ slice(), splice()
○ Explain the differences in terms of parameters and behavior
○ Provide code examples to prove your point



Il metodo `slice()` viene utilizzato per estrarre una porzione di un array e restituirne una copia in base agli indici specificati (da start a end(end non incluso)), senza modificare l'array originale.

``` js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // Output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // Output: Array ["camel", "duck"]
```



Il metodo `splice()` modifica il contenuto di un array rimuovendo o sostituendo gli elementi esistenti e/o aggiungendo nuovi elementi al loro posto.

``` js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months); // Output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months); // Output: Array ["Jan", "Feb", "March", "April", "May"]
```