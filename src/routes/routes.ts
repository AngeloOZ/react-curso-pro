import { LazyExoticComponent } from "react";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Componet: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyLoad/layout/LazyLayout'));
// const Lazy1 = lazy(() => import(/* webpackChunkName: "Lazy1"*/'../01-lazyLoad/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2"*/'../01-lazyLoad/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazy3"*/'../01-lazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/register/*',
        to: '/register/',
        Componet: RegisterPage,
        name: 'Registrarse'
    },
    {
        to: '/formik-basic',
        path: 'formik-basic',
        Componet: FormikBasicPage,
        name: 'Formik ejemplo básico'
    },
];