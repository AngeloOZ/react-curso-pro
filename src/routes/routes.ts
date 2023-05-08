import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyLoad/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Componet: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyLoad/layout/LazyLayout'));
const Lazy1 = lazy(() => import(/* webpackChunkName: "Lazy1"*/'../01-lazyLoad/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2"*/'../01-lazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazy3"*/'../01-lazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/Lazy1/*',
        to: '/lazy1/',
        Componet: LazyLayout,
        name: 'Lazy Layout Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Componet: NoLazy,
        name: 'No Lazy'
    },
];