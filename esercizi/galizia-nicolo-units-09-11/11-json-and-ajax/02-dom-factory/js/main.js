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

cars = JSON.parse(cars);

console.log(cars.modelCars[0]);



