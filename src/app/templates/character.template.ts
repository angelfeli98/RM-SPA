
import { ajax } from 'rxjs/ajax';
import { Character } from '../interfaces/character.interface';
import { characterComponent } from '../components/character.component';

export const CharactersTemplate = async(params ?: string[]): Promise<string> => {
    const page = Math.round((Math.random()*20));
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const data: Character[] = (await (await fetch(url)).json()).results;
    document.title = 'RM | Characters'
    const cards = data.reduce((prev ,character) => prev + characterComponent(character), '');
    return `
        <h2 class="title">Characters</h2>
        <div class="container mb2">
            <div class="card-columns">
                ${cards}
            </div>
        </div>
    `
}