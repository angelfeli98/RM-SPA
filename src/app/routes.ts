import { route } from './interfaces/route.interface';
import { CharactersTemplate } from './templates/character.template';
import { HomeTemplate } from './templates/home.template';
import { notFounfdTmeplate } from './templates/404.tmeplate';
import { characterTemplate } from './templates/charcter.template';
import { LocationsTemplate } from './templates/locations.template';
import { locationCharacterTemplate } from './templates/locationCharacter.template';

export const routes: route[] = [
    { route: 'home', template: HomeTemplate },
    { route: 'characters', template: CharactersTemplate, navId: 'character' },
    { route: 'character/:id', template: characterTemplate },
    { route: 'locations', template: LocationsTemplate },
    { route: 'charactersAt/:id', template: locationCharacterTemplate },
    { route: '**', template: notFounfdTmeplate }
]