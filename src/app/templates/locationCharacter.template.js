"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationCharacterTemplate = void 0;
const data_function_1 = require("../functions/data.function.js");
const character_component_1 = require("../components/character.component.js");
exports.locationCharacterTemplate = async (params) => {
    const idLocation = params;
    const data = new data_function_1.DataFunction();
    const location = data.locations.find(location => location.id.toString() == idLocation) || await (await fetch(`https://rickandmortyapi.com/api/location/${idLocation}`)).json();
    const chaarctersData = await Promise.all((await Promise.all(location.residents.map((resident) => fetch(resident)))).map((response) => response.json()));
    const characters = chaarctersData.reduce((prev, curr) => prev + character_component_1.characterComponent(curr), '');
    return `
        <h2 class="title">Characters at ${location.name}</h2>
        <div class="container mb2">
            <div class="card-columns">
                ${characters}
            </div>
        </div>
    `;
};
