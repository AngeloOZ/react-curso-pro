import { LazyExoticComponent } from "react";
import { FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Componet: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

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
    {
        to: '/formik-yup',
        path: 'formik-yup',
        Componet: FormikYupPage,
        name: 'Formik ejemplo Yup'
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        Componet: FormikComponents,
        name: 'Formik ejemplo Components'
    },
    {
        to: '/formik-abstraction',
        path: 'formik-abstraction',
        Componet: FormikAbstractation,
        name: 'Formik ejemplo abstraction'
    },
];