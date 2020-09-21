
import { route } from './interfaces/route.interface';
import { fromEvent, Observable, Subscription } from "rxjs";

export class AppRouter{

    public static Router: AppRouter;

    private routes: route[];
    private currentRoute: route;
    private currentRoute$: Subscription;
    private window: Window;
    private outlet: HTMLElement;
    private acort: NodeList;

    constructor(routes: route[]){
        this.window = window;
        this.routes = routes;
        this.outlet = document.querySelector('section') || document.createElement('section');
        this.currentRoute = { route: '', template: () => {} };
        this.currentRoute$ = fromEvent(this.window, 'hashchange')
                                .subscribe(this.detectRoute);
        this.acort = document.getElementsByName('a');
        this.renderInitRoute();
        // AppRouter.Router = AppRouter.Router?AppRouter.Router:this;
        // return AppRouter.Router;
    }

    private renderInitRoute = (): void => {
        this.detectRoute(null);
    }

    private detectRoute = (change: Event | null): any => {
        const routeUrl = this.window.location.hash.split('#');
        const completeUlr = routeUrl[1].split('/').slice(1);
        const notFoundRoute = this.routes.find(route => route.route === '**');
        let auxRoute = this.routes.find(route => route.route.split('/')[0] === completeUlr[0]);
        if(auxRoute || notFoundRoute){
            this.currentRoute = auxRoute?auxRoute:
                                notFoundRoute?notFoundRoute:{route: '', template: () => {}};
            this.renderRoute();
        }
    }

    private getParamsRoute = (): string[] => {
        const completeRoute = this.window.location.hash.split('/');
        return completeRoute.slice(2);
    };

    private renderRoute = async(): Promise<void> => {
        const params = this.getParamsRoute();
        const template = await this.currentRoute.template(...params);
        this.outlet.innerHTML = template;
        if(this.currentRoute.actions)
            this.currentRoute.actions();
    }
}