/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-10
 * @description 
 * 4.Clone
Write a function clone() that clones any object
● Test it on the object in the next slide
● Change the name of the cloned object and make sure that the original did not change
Important:
Write the function yourself, do not use built-in functions such as Object.assign(), jQuery.extend() or 
JSON.parse(JSON.stringify())
Continues on next page >>>
46
4.Clone
The object to clone and test:
{ 
  name: 'Green Mueller',
  email: 'Rigoberto_Muller47@yahoo.com',
  address: '575 Aiden Forks',
  bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
  active: false,
  salary: 37993,
  birth: Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time),
  bankInformation: 
   { amount: '802.04',
     date: Thu Feb 02 2012 00:00:00 GMT+0100 (W. Europe Standard Time),
     business: 'Bernhard, Kuhn and Stehr',
     name: 'Investment Account 8624',
     type: 'payment',
     account: '34889694' } 
}
 */

let obj = {
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    active: false,
    salary: 37993,
    birth: new Date('Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time)'),
    bankInformation:
    {
        amount: '802.04',
        date: new Date('Thu Feb 02 2012 00:00:00 GMT+0100 (W. Europe Standard Time)'),
        business: 'Bernhard, Kuhn and Stehr',
        name: 'Investment Account 8624',
        type: 'payment',
        account: '34889694'
    }
}

/**
 * Function of the clone
 * @param {object} obj - Objet to clone
 * @return {object} - newObject
 */
function clone(obj) {
    const newObj = {};
    Object.entries(obj).forEach(keyValue => {
        newObj[keyValue[0]] = keyValue[1];
    })
    return newObj;
}

console.log(clone(obj));


