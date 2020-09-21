"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersTemplate = void 0;
const character_component_1 = require("../components/character.component.js");
exports.CharactersTemplate = async (params) => {
    const page = Math.round((Math.random() * 20));
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const data = (await (await fetch(url)).json()).results;
    document.title = 'RM | Characters';
    const cards = data.reduce((prev, character) => prev + character_component_1.characterComponent(character), '');
    return `
        <h2 class="title">Characters</h2>
        <div class="container mb2">
            <div class="card-columns">
                ${cards}
            </div>
        </div>
    `;
};
