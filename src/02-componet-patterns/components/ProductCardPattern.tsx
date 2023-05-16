import css from '../styles/styles.module.css'

import { useProduct } from '../hooks'
import { createContext } from 'react';

import { ProductContextProps, PropsCardProduct, Product } from '../interfaces/Product';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


interface Props {
    product: Product
    children: JSX.Element | JSX.Element[]
    className?: string
    style?: React.CSSProperties
}


export const ProductCardPattern = ({ product, children, className, style }: Props) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${css.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}


