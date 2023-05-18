import css from '../styles/styles.module.css'

import { useProduct } from '../hooks'
import { createContext } from 'react';

import { ProductContextProps, Product, OnChangeArgs } from '../interfaces/Product';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


interface Props {
    product: Product
    children: JSX.Element | JSX.Element[]
    className?: string
    style?: React.CSSProperties
    onChange?: (args: OnChangeArgs) => void
    value?: number
}


export const ProductCardPattern = ({ product, children, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div className={`${css.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}


