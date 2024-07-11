/**
 * @file        main.js
 * @author      Nicolò Galizia
 * 
 * @description 
 * Implement the arrivals page of an airport such as this one
 * ○ Create a complete proper webpage with a title, description and all other HTML tags 
 * ○ Add Javascript and CSS files
 * ○ Include as much detail as you can to each flight row
 * ○ Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc
 * ● Simulate a real arrivals list
 * ○ The list should start empty and update every 10 seconds
 * ○ Flights that have arrived should be removed after 60 seconds
 * ○ Flights should change status in time. E.g. departing>on_time>delayed>arrived
 * ○ Flights that are delayed should be displayed in red
 * ○ New flights should be added to the bottom of the list
 * ○ The list should be sorted by date and hour
 */

// Array of object on flies
const flights = [
    KL1640 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "11",
            minutes: "45"
        },
        destination: "AMSTERDAMN",
        id: "KL1640",
        statusFly: ["DEPARTING"],
        airplane: "E75",
        checkin: "B"
    },
    IB8767 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "12",
            minutes: "00"
        },
        destination: "MADRID",
        id: "IB8767",
        statusFly: ["DEPARTING"],
        airplane: "CRK",
        checkin: "D"
    },
    FR8796 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "13",
            minutes: "00"
        },
        destination: "CAGLIARI",
        id: "FR8796",
        statusFly: ["DEPARTING"],
        airplane: "73H",
        checkin: "A"
    },
    FR2313 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "13",
            minutes: "30"
        },
        destination: "PALERMO",
        id: "FR2313",
        statusFly: ["DEPARTING"],
        airplane: "73H",
        checkin: "A"
    },
    EN8845 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "14",
            minutes: "10"
        },
        destination: "FRANKFURT",
        id: "EN8845",
        statusFly: ["DEPARTING"],
        airplane: "E75",
        checkin: "B"
    },
    W46914 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "14",
            minutes: "15"
        },
        destination: "NAPOLI",
        id: "W46914",
        statusFly: ["DEPARTING"],
        airplane: "32Q",
        checkin: "D"
    },
    FR465 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "15",
            minutes: "00"
        },
        destination: "LONDON Stansted",
        id: "FR465",
        statusFly: ["DEPARTING"],
        airplane: "73H",
        checkin: "A"
    },
    AT945 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "15",
            minutes: "05"
        },
        destination: "CASABLANCA",
        id: "AT945",
        statusFly: ["DEPARTING"],
        airplane: "73H",
        checkin: "A"
    },
    AZ1428 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "15",
            minutes: "15"
        },
        destination: "ROMA Fiumicino",
        id: "AZ1428",
        statusFly: ["DEPARTING"],
        airplane: "320",
        checkin: "B"
    },
    KL1640 = {
        date: {
            day: "06",
            month: "07"
        },
        hourFly: {
            hours: "15",
            minutes: "45"
        },
        destination: "MALTA",
        id: "FR3373",
        statusFly: ["DEPARTING"],
        airplane: "73H",
        checkin: "A"
    }
];

// Array of the status of the fly
const statusFlights = ["ON TIME", "DELAYED", "ARRIVED"];

/**
 *  Import the flight 
 */
function renderFlights() {
    const tbody = document.querySelector("tbody");

    for (let i = 0; i < flights.length; i++) {
        setTimeout(() => {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${flights[i].date.day}-${flights[i].date.month}</td>
            <td>${flights[i].hourFly.hours}:${flights[i].hourFly.minutes}</td>
            <td>${flights[i].destination}</td>
            <td>${flights[i].id}</td>
            <td class="status">${flights[i].statusFly}</td>
            <td>${flights[i].airplane}</td>
            <td>${flights[i].checkin}</td>
            `;

            tbody.appendChild(row);
        }, i * 10000); // Delay of the 10 seconds after every row
    };
};

/**
 * Update a random status of the fly between "ON TIME" and "DELAYED" for every class `status` on tbody
*/
function updateRandomStatus() {
    // Select the "tbody .status"
    const updateStatusFlights = document.querySelectorAll("tbody .status");

    // Loop of the `updateStatusFlights` to chage the status
    for (let i = 0; i < updateStatusFlights.length; i++) {
        // Check if the text content of the statusFly isn't "ARRIVED"
        if (updateStatusFlights[i].textContent !== "ARRIVED") {
            // New array composed by two element: "ON TIME" and "DELAYED"
            let selectStatusFly = statusFlights.slice(0, 2);
            // Impost a random status between "ON TIME" and "DELAYED"
            const randomStatus = selectStatusFly[Math.floor(Math.random() * selectStatusFly.length)];
            updateStatusFlights[i].textContent = randomStatus;

            colorStatus();
        }
    }
}

/**
 * Update status different by "ARRIVED" in "ARRIVED"
*/
function updateStatusFly() {
    const updateStatusFlights = document.querySelectorAll("tbody .status");

    for (let i = 0; i < updateStatusFlights.length; i++) {

        // Shedule the function `updateRandomStatus` after 5 seconds
        setInterval(updateRandomStatus, 5000);

        // Shedule every 8 seconds the chage of the status in "ARRIVED"
        setInterval(() => {
            if (updateStatusFlights[i].textContent !== "ARRIVED") {
                updateStatusFlights[i].textContent = statusFlights[2];
            }
        }, 8000);
    }
}


function deleteArrivedStatus() {
    const deleteFlights = document.querySelectorAll("tbody .status");
    for (let i = 0; i < deleteFlights.length; i++) {
        if (deleteFlights[i].textContent === "ARRIVED") {
            const row = deleteFlights[i].parentNode;
            row.parentNode.removeChild(row);
        }
    }
}

// TODO: Da modificare
function colorStatus() {
    const flights = document.querySelectorAll("tbody .status");
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].textContent === "ON TIME") {
            flights[i].classList.remove('delayed');
            flights[i].classList.add('on-time');
        } else if (flights[i].textContent === "DELAYED") {
            flights[i].classList.remove('on-time');
            flights[i].classList.add('delayed');
        } else if (flights[i].textContent === "ARRIVED") {
            flights[i].classList.remove('on-time');
            flights[i].classList.remove('delayed');
        }
    }
}

// Schedule after 10 seconds function `renderFlights`
setTimeout(renderFlights, 1000);

// Esegui la funzione per aggiornare gli stati dei voli
setInterval(updateStatusFly, 10000);



// Remuve the fly wiyh status "ARRIVED"
setInterval(deleteArrivedStatus, 60000);