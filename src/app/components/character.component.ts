import { Character } from '../interfaces/character.interface';

export const characterComponent = (chaarcter: Character): string => `
    <div class="card cardCustom">
        <a href="http://localhost:8080/#/character/${chaarcter.id}">
            <img src="${chaarcter.image}" class="card-img-top" alt="${chaarcter.name}" loading="lazy">
        </a>
        <h4 class="card-title">${chaarcter.name}</h4>
        <div class="card-body">
            <h5 class="card-title">Location ${chaarcter.location.name}</h5>
            <p class="card-text">${chaarcter.species}</p>
        </div>
    </div>
`