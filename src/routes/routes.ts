import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Componet: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "Lazy1"*/'../01-lazyLoad/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2"*/'../01-lazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazy3"*/'../01-lazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'Lazy1',
        Componet: Lazy1,
        name: 'Lazy Page 1'
    },
    {
        to: '/lazy2',
        path: 'Lazy2',
        Componet: Lazy2,
        name: 'Lazy Page 2'
    },
    {
        to: '/lazy3',
        path: 'Lazy3',
        Componet: Lazy3,
        name: 'Lazy Page 3'
    },
];