import { characterComponent } from '../components/character.component';
import { Character } from '../interfaces/character.interface';

export const characterTemplate = async(params?: string[]): Promise<string> => {
    const url = `https://rickandmortyapi.com/api/character/${params}`;
    const character: Character = await (await fetch(url)).json();
    const location = character.location.url.split('/');
    const locationId = location[location.length - 1];
    const origin = character.origin.url.split('/');
    const originId = location[location.length - 1];
    document.title = `RM | ${character.name}`;
    const ifUnknon = (type: string, obj: any):string => `
        <p>${type}:
            ${obj.name != 'unknown'?`
                <a href="${`http://localhost:8080/#/charactersAt/${type=='Location'?locationId:originId}`}">
                    ${obj.name}
                </a>
                `:`
                    ${obj.name}
            `}
        </p>
    `
    return `
        <div class="container">
            <div class="row character">
                <div class="col-7 fix-1">
                    <img src="${character.image}">
                </div>
                <div class="col-5 character-info">
                    <h4>${character.name}</h4>
                    <h5><spam class="${ character.status=='Alive'?'status-alive':'status-dead' }"></spam> ${character.status} - ${character.species}</h5>
                    ${ifUnknon('Location', character.location)}
                    ${ifUnknon('Origin', character.origin)}
                </div>
            </div>
        </div>
    `;
}