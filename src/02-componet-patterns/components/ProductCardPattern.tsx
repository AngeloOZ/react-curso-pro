import css from '../styles/styles.module.css'

import { useProduct } from '../hooks'
import { createContext } from 'react';

import { ProductContextProps, PropsCardProduct } from '../interfaces/Product';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCardPattern = ({ product, children }: PropsCardProduct) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={css.productCard}>
                {children}
            </div>
        </Provider>
    )
}


