
export interface route{
    route: string,
    template: Function,
    navId ?: string,
    actions?: Function,
    children?: route,
}