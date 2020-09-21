import { Location } from '../interfaces/location.interface';
import { DataFunction } from '../functions/data.function';

export const LocationsTemplate = async(): Promise<string> => {
    const locations: Location[] = (await (await fetch('https://rickandmortyapi.com/api/location/')).json()).results;
    const data = locations.reduce((prev: string, curr: Location): string => `
        <a href="http://localhost:8080/#/charactersAt/${curr.id}" class="list-group-item list-group-item-action list-group-item-dark location-list">
            ${curr.name}
        </a>
    ` + prev , '');
    const dataObject = new DataFunction();
    dataObject.locations= locations;
    document.title = 'RM | Locations'
    return `
        <div class="container mt-3">
            <h2>Locations</h2>
            <ul class="list-group">
                ${data}
            </ul>
        </div>
    `
}