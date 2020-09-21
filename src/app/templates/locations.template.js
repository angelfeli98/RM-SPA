"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsTemplate = void 0;
const data_function_1 = require("../functions/data.function.js");
exports.LocationsTemplate = async () => {
    const locations = (await (await fetch('https://rickandmortyapi.com/api/location/')).json()).results;
    const data = locations.reduce((prev, curr) => `
        <a href="http://localhost:8080/#/charactersAt/${curr.id}" class="list-group-item list-group-item-action list-group-item-dark location-list">
            ${curr.name}
        </a>
    ` + prev, '');
    const dataObject = new data_function_1.DataFunction();
    dataObject.locations = locations;
    document.title = 'RM | Locations';
    return `
        <div class="container mt-3">
            <h2>Locations</h2>
            <ul class="list-group">
                ${data}
            </ul>
        </div>
    `;
};
