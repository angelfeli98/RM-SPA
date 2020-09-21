import { DataFunction } from '../functions/data.function.js';
import { Character } from '../interfaces/character.interface.js';
import { characterComponent } from '../components/character.component.js';
import { Location } from '../interfaces/location.interface.js';

export const locationCharacterTemplate = async(params: string| number): Promise<string> => {
    const idLocation = params;
    const data = new DataFunction();
    const location: Location = data.locations.find(location => location.id.toString() == idLocation) || await (await fetch(`https://rickandmortyapi.com/api/location/${idLocation}`)).json();
    const chaarctersData: Character[] = await Promise.all((await Promise.all(location.residents.map( (resident: string) => fetch(resident) ))).map( (response: any) => response.json() ))
    const characters = chaarctersData.reduce( (prev: string, curr: Character) => prev + characterComponent(curr) , '');
    return `
        <h2 class="title">Characters at ${ location.name }</h2>
        <div class="container mb2">
            <div class="card-columns">
                ${characters}
            </div>
        </div>
    `
}