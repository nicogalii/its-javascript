
`SLICE()`:

- Parametri:
    `slice()` estrae una parte di una stringa e restituisce la parte estratta in una nuova stringa.

    Il metodo accetta 2 parametri: posizione iniziale, startIndex, e posizione finale, endIndex (fine non
    inclusa).

- Comportamento:
    Estrae una porzione della stringa da startIndex (incluso) fino a, ma non incluso, endIndex.
        - Se startIndex è negativo, conta all'indietro dalla fine della stringa.
        - Se endIndex è negativo, conta all'indietro dalla fine della stringa.
        - Un valore positivo itera in avanti e un valore negativo itera all'indietro.

------------------------------------------------------------------------------------

Esempio con valore positivi:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 2 (incluso) al 8 (escluso)
const strPart = str.substring(2, 8);
console.log(strPart); // Output: "ao mon"
```

Esempio con valore negativo:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice -8 (escluso) al -2 (incluso) --> parte dal fondo (startIndex deve essere maggiore al endIndex)
const strPart = str.substring(-8,-2);
console.log(strPart); // Output: "o mond"
```


Esempio con un solo valore positivo:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 2 (incluso) in avanti
const strPart = str.substring(2);
console.log(strPart); // Output: "ao mondo!"
```

Esempio con un solo valore negativo:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice -2 (escluso) in avanti
const strPart = str.substring(-2);
console.log(strPart); // Output: "o!"
```

------------------------------------------------------------------------------------

___________________________________________________________________________________________________________

`SUBSTRING()`:

- Parametri:
    `substring()` estrae una parte di una stringa e restituisce la parte estratta in una nuova stringa.

    Il metodo accetta 2 parametri: posizione iniziale, startIndex, e posizione finale, endIndex (fine non
    inclusa).

- Comportamento:
    `substring()` è simile a `slice()`.
        - La differenza è che i valori iniziali e finali inferiori a 0 vengono trattati come 0 in substring().
        - Se si ommette il ​​secondo parametro, verrà tagliato il resto della stringa.

-----------------------------------------------------------------------------------

Esempio con valore positivi:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 2 (incluso) al 8 (escluso)
const strPart = str.substring(2, 8);
console.log(strPart); // Output: "ao mon"
```

Esempio con valore negativo:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 0 (Valore negativo = 0) al 8 (escluso)
const strPart = str.substring(-2, 8);
console.log(strPart); // Output: "Ciao mon"
```

Esempio con un solo valore:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 2 (incluso) in avanti
const strPart = str.substring(2);
console.log(strPart); // Output: "ao mondo!"
```

Esempio con un solo valore:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 0 (Valore negativo = 0) in avanti
const strPart = str.substring(-2);
console.log(strPart); // Output: "ciao mondo!"
```

-----------------------------------------------------------------------------------

___________________________________________________________________________________________________________

`SUBSTR()`:

- Parametri:
    `substr()` estrae una parte di una stringa e restituisce la parte estratta in una nuova stringa.
    Il metodo accetta 2 parametri: posizione iniziale, startIndex, e lunghezza, length.

- Comportamento:
    `substr()` è simile a `slice()`.
    La differenza è che il secondo parametro specifica la lunghezza della parte estratta.

-----------------------------------------------------------------------------------

Esempio con valore positivi:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri partendo dall'indice 2 fino a al 2+8
const strPart = str.substr(2, 8);
console.log(strPart); // Output: "ao mondo"
```

Esempio con valore negativo:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri partendo dall'indice -2 fino a al -2+8
const strPart = str.substring(-2, 8);
console.log(strPart); // Output: "o!"
```

Esempio con un solo valore:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri partedo dall'indice 2 (incluso) in avanti
const strPart = str.substring(2);
console.log(strPart); // Output: "ao mondo!"
```

Esempio con un solo valore:
``` js
const str = "Ciao mondo!";

// Estrae i caratteri dall'indice 0 (Valore negativo = 0) in avanti
const strPart = str.substring(-2);
console.log(strPart); // Output: "o!"
```


------------------------------------------------------------------------------------------------------------------------



+----------------------------------------------------+
|                          |                         |                           |
+----------------------------------------------------+
|                                                    |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
+----------------------------------------------------+