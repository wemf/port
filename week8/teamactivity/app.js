const ENDPOINT_URL = "https://swapi.dev/api";
const STARSHIPS_API = `${ENDPOINT_URL}/starships/`; 

async function fetchAPI (url) {
    let data = {}
    const buttons = document.querySelectorAll('button');
    try {
        buttons.forEach(btn => btn.disabled = true);
        const resp = await fetch(url);
        if (!resp.ok){
            throw Error(resp.statusText);
        } else {
            data = await resp.json();
        }
    } catch (err) {
        data = { "error": err }
    } finally {
        buttons.forEach(btn => btn.disabled = false);
        return data;
    }
}

const createShipRow = (ship) => {
    const { name, length, crew } = ship;
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${name}</td>
        <td>${length}</td>
        <td>${crew}</td>
    `;
    return tr;
}

const renderShipTable = (ships) => {
    const shipTable = document.getElementById("shipTable");
    const shipTableBody = shipTable.children[1];
    shipTableBody.innerHTML = "";
    ships.forEach(ship => {
        const row = createShipRow(ship);
        shipTableBody.appendChild(row);
    });
}

async function showStarships (URL = STARSHIPS_API) {
    const resp = await fetchAPI(URL);
    if(!resp.error){
        renderShipTable(resp.results)
    }
    const next = document.getElementById("next");
    next.disabled = false;
    if (resp.next) {
        ['onclick', 'ontouchend'].forEach(eventType => {
            next[eventType] = () => {
                showStarships(resp.next);
            };
        })
    } else {
        next.disabled = true;
    }
    const previous = document.getElementById("previous");
    previous.disabled = false;
    if (resp.previous) {
        ['onclick', 'ontouchend'].forEach(eventType => {
            previous[eventType] = () => {
                showStarships(resp.previous);
            };
        })
    } else {
        previous.disabled = true;
    }
}

showStarships();

