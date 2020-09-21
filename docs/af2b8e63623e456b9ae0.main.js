(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})([function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.characterComponent=void 0,b.characterComponent=(a)=>`
    <div class="card cardCustom">
        <a href="https://angelfeli98.github.io/RM-SPA/#/character/${a.id}">
            <img src="${a.image}" class="card-img-top" alt="${a.name}" loading="lazy">
        </a>
        <h4 class="card-title">${a.name}</h4>
        <div class="card-body">
            <h5 class="card-title">Location ${a.location.name}</h5>
            <p class="card-text">${a.species}</p>
        </div>
    </div>
`},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.DataFunction=void 0;class c{constructor(){return this.locations=[],c.Data=c.Data?c.Data:this,c.Data}}b.DataFunction=c},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),c(3);const d=c(4),e=c(5),f=new d.AppRouter(e.routes)},function(){},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.AppRouter=void 0;b.AppRouter=class{constructor(a){this.renderInitRoute=()=>{this.detectRoute(null)},this.detectRoute=()=>{const a=this.window.location.hash.split('#'),b=a[1].split('/').slice(1),c=this.routes.find((a)=>'**'===a.route);let d=this.routes.find((a)=>a.route.split('/')[0]===b[0]);(d||c)&&(this.currentRoute=d?d:c?c:{route:'',template:()=>{}},this.renderRoute())},this.getParamsRoute=()=>{const a=this.window.location.hash.split('/');return a.slice(2)},this.renderRoute=async()=>{const a=this.getParamsRoute(),b=await this.currentRoute.template(...a);this.outlet.innerHTML=b,this.currentRoute.actions&&this.currentRoute.actions()},this.window=window,this.routes=a,this.outlet=document.querySelector('section')||document.createElement('section'),this.currentRoute={route:'',template:()=>{}},this.window.onhashchange=this.detectRoute,this.acort=document.getElementsByName('a'),this.renderInitRoute()}}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.routes=void 0;const d=c(6),e=c(7),f=c(8),g=c(9),h=c(10),i=c(11);b.routes=[{route:'home',template:e.HomeTemplate},{route:'characters',template:d.CharactersTemplate,navId:'character'},{route:'character/:id',template:g.characterTemplate},{route:'locations',template:h.LocationsTemplate},{route:'charactersAt/:id',template:i.locationCharacterTemplate},{route:'**',template:f.notFounfdTmeplate}]},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.CharactersTemplate=void 0;const d=c(0);b.CharactersTemplate=async()=>{const a=Math.round(20*Math.random()),b=`https://rickandmortyapi.com/api/character/?page=${a}`,c=(await(await fetch(b)).json()).results;document.title='RM | Characters';const e=c.reduce((a,b)=>a+d.characterComponent(b),'');return`
        <h2 class="title">Characters</h2>
        <div class="container mb2">
            <div class="card-columns">
                ${e}
            </div>
        </div>
    `}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.HomeTemplate=void 0,b.HomeTemplate=()=>(document.title='RM | HOME',`
    <div class="jumbotron home">
        <h1 class="display-4">Hello, Folks!</h1>
        <p class="lead">Wellcome to Rick and Morty page</p>
        <p> GitHub repository ...</p>
        <hr class="my-4">
        <p>This page is a practice web site, it uses Rick and Morty Api .</p>
        <a class="btn btn-primary btn-lg" href="https://rickandmortyapi.com/" target="blank" role="button">Learn more</a>
    </div>

    `)},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.notFounfdTmeplate=void 0,b.notFounfdTmeplate=()=>`
    <div class="notFound">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkiuW3k-iK047fr1kZ7AmERNFJuEU4v6m8Ag&usqp=CAU">
        <h2> 404 not Found </h2>
        <h2>Ops...</h2>
        <h3>Are you lost?</h3>
    </div>
`},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.characterTemplate=void 0,b.characterTemplate=async(a)=>{const b=`https://rickandmortyapi.com/api/character/${a}`,c=await(await fetch(b)).json(),d=c.location.url.split('/'),e=d[d.length-1],f=c.origin.url.split('/'),g=d[d.length-1];document.title=`RM | ${c.name}`;const h=(a,b)=>`
        <p>${a}:
            ${'unknown'==b.name?`
                    ${b.name}
            `:`
                <a href="${`https://angelfeli98.github.io/RM-SPA/#/charactersAt/${'Location'==a?e:g}`}">
                    ${b.name}
                </a>
                `}
        </p>
    `;return`
        <div class="container">
            <div class="row character">
                <div class="col-7 fix-1">
                    <img src="${c.image}">
                </div>
                <div class="col-5 character-info">
                    <h4>${c.name}</h4>
                    <h5><spam class="${'Alive'==c.status?'status-alive':'status-dead'}"></spam> ${c.status} - ${c.species}</h5>
                    ${h('Location',c.location)}
                    ${h('Origin',c.origin)}
                </div>
            </div>
        </div>
    `}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.LocationsTemplate=void 0;const d=c(1);b.LocationsTemplate=async()=>{const a=(await(await fetch('https://rickandmortyapi.com/api/location/')).json()).results,b=a.reduce((a,b)=>`
        <a href="https://angelfeli98.github.io/RM-SPA/#/charactersAt/${b.id}" class="list-group-item list-group-item-action list-group-item-dark location-list">
            ${b.name}
        </a>
    `+a,''),c=new d.DataFunction;return c.locations=a,document.title='RM | Locations',`
        <div class="container mt-3">
            <h2>Locations</h2>
            <ul class="list-group">
                ${b}
            </ul>
        </div>
    `}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.locationCharacterTemplate=void 0;const d=c(1),e=c(0);b.locationCharacterTemplate=async(a)=>{const b=a,c=new d.DataFunction,f=c.locations.find((a)=>a.id.toString()==b)||(await(await fetch(`https://rickandmortyapi.com/api/location/${b}`)).json()),g=await Promise.all((await Promise.all(f.residents.map((a)=>fetch(a)))).map((a)=>a.json())),h=g.reduce((a,b)=>a+e.characterComponent(b),'');return`
        <h2 class="title">Characters at ${f.name}</h2>
        <div class="container mb2">
            <div class="card-columns">
                ${h}
            </div>
        </div>
    `}}]);
