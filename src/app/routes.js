"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const character_template_1 = require("./templates/character.template.js");
const home_template_1 = require("./templates/home.template.js");
const _404_tmeplate_1 = require("./templates/404.tmeplate.js");
const charcter_template_1 = require("./templates/charcter.template.js");
const locations_template_1 = require("./templates/locations.template.js");
const locationCharacter_template_1 = require("./templates/locationCharacter.template.js");
exports.routes = [
    { route: 'home', template: home_template_1.HomeTemplate },
    { route: 'characters', template: character_template_1.CharactersTemplate, navId: 'character' },
    { route: 'character/:id', template: charcter_template_1.characterTemplate },
    { route: 'locations', template: locations_template_1.LocationsTemplate },
    { route: 'charactersAt/:id', template: locationCharacter_template_1.locationCharacterTemplate },
    { route: '**', template: _404_tmeplate_1.notFounfdTmeplate }
];
