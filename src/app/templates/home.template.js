"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeTemplate = void 0;
exports.HomeTemplate = (params) => {
    document.title = 'RM | HOME';
    return `
    <div class="jumbotron home">
        <h1 class="display-4">Hello, Folks!</h1>
        <p class="lead">Wellcome to Rick and Morty page</p>
        <p> GitHub repository ...</p>
        <hr class="my-4">
        <p>This page is a practice web site, it uses Rick and Morty Api .</p>
        <a class="btn btn-primary btn-lg" href="https://rickandmortyapi.com/" target="blank" role="button">Learn more</a>
    </div>

    `;
};
