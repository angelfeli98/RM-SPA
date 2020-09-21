"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
class AppRouter {
    constructor(routes) {
        this.renderInitRoute = () => {
            this.detectRoute(null);
        };
        this.detectRoute = (change) => {
            const routeUrl = this.window.location.hash.split('#');
            const completeUlr = routeUrl[1].split('/').slice(1);
            const notFoundRoute = this.routes.find(route => route.route === '**');
            let auxRoute = this.routes.find(route => route.route.split('/')[0] === completeUlr[0]);
            if (auxRoute || notFoundRoute) {
                this.currentRoute = auxRoute ? auxRoute :
                    notFoundRoute ? notFoundRoute : { route: '', template: () => { } };
                this.renderRoute();
            }
        };
        this.getParamsRoute = () => {
            const completeRoute = this.window.location.hash.split('/');
            return completeRoute.slice(2);
        };
        this.renderRoute = async () => {
            const params = this.getParamsRoute();
            const template = await this.currentRoute.template(...params);
            this.outlet.innerHTML = template;
            if (this.currentRoute.actions)
                this.currentRoute.actions();
        };
        this.window = window;
        this.routes = routes;
        this.outlet = document.querySelector('section') || document.createElement('section');
        this.currentRoute = { route: '', template: () => { } };
        this.window.onhashchange = this.detectRoute;
        this.acort = document.getElementsByName('a');
        this.renderInitRoute();
        // AppRouter.Router = AppRouter.Router?AppRouter.Router:this;
        // return AppRouter.Router;
    }
}
exports.AppRouter = AppRouter;
