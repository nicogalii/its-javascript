/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-07-14
 * @description 
 */

let cars = `{
    "name": "Fiat",
    "location": "Torino, Italia",
    "established": 1899,
    "departments": ["Assembly", "Painting", "Quality Control"],
    "manager": {
        "name": "Giovanni",
        "surname": "Agnelli"
    },
    "recentUpgrade": null
    ,
    "modelCars": [
        {
            "make": "Fiat",
            "model": "Panda",
            "year": 2010,
            "isElectric": false,
            "features": ["Aria condizionata", "Cruise Control", "Bluetooth"],
            "owner": {
                "name": "Giovanni",
                "surname": "Rossi",
                "license": "DY214KM"
            },
            "previousOwners": null
        },
        {
            "make": "Abarth",
            "model": "500 Abarth",
            "year": 2019,
            "isElectric": false,
            "features": ["Bluetooth", "Sistema di navigazione"],
            "owner": {
                "name": "Nicolò",
                "surname": "Galizia",
                "license": "FG005TD"
            },
            "previousOwners": null
        },
        {
            "make": "Tesla",
            "model": "Model S",
            "year": 2021,
            "isElectric": true,
            "features": ["Pilota automatico", "Aria condizionata"],
            "owner": {
                "name": "Antonio",
                "surname": "Di Gennaro",
                "license": "JJ429AA"
            },
            "previousOwners": null
        },
        {
            "make": "Alfa romeo",
            "model": "Mito",
            "year": 2020,
            "isElectric": false,
            "features": ["Air Conditioning", "Cruise Control", "Bluetooth"],
            "owner": {
                "name": "Stefano",
                "surname": "Cherio",
                "license": "FL241ED"
            },
            "previousOwners": null
        },
        {
            "make": "Volkswagen",
            "model": "Golf",
            "year": 2019,
            "isElectric": false,
            "features": ["Sistema di navigazione", "Cruise Control", "Bluetooth"],
            "owner": {
                "name": "Nicolò",
                "surname": "Galizia",
                "license": "DY214KM"
            },
            "previousOwners": null
        }
    ]
}`;



let carsObject = JSON.parse(cars);

let body = document.querySelector("body");
const unorderList = document.createElement("ul");

body.appendChild(unorderList);

const createList = (value, key) => {
    const list = document.createElement("li");
    list.textContent = key + ": " + value;
    unorderList.appendChild(list);
}

// Loop of the different model cars
for (let i = 0; i < carsObject.modelCars.length; i++) {
    const key = Object.keys(carsObject.modelCars[i]);
    console.log(key);
    createList(carsObject.modelCars[i].make, key[0]);
    createList(carsObject.modelCars[i].model, key[1]);
    createList(carsObject.modelCars[i].year, key[2]);
    createList(carsObject.modelCars[i].isElectric, key[3]);
    // Loop of the different features of the cars
    for (let j = 0; j < carsObject.modelCars[i].features.length; j++) {
        createList(carsObject.modelCars[i].features[j]);
    };
    createList(carsObject.modelCars[i].owner.name);
    createList(carsObject.modelCars[i].owner.surname);
    createList(carsObject.modelCars[i].owner.license);
    createList(carsObject.modelCars[i].previousOwners);
};

// carsObject.modelCars.forEach(car => {
//     console.log(car.make);
//     console.log(car.model);
//     console.log(car.isElectric);
//     car.features.forEach(feat => {
//         console.log(feat);
//     });

//     console.log(car.owner.name);
//     console.log(car.owner.surname);
//     console.log(car.owner.license);
//     console.log(car.previousOwners);
//     console.log("---------------------------------");
//     // car.unorderList.appendChild(list);
// });

// unorderList.list.cars.carsObject[0];


