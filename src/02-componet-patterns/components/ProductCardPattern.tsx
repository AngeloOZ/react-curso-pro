import css from '../styles/styles.module.css'

import { useProduct } from '../hooks'
import { createContext } from 'react';

import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandle } from '../interfaces/Product';

// Context
export const ProductContext = createContext({} as ProductContextProps);
// Provider
const { Provider } = ProductContext;


interface Props {
    product: Product;
    children: (args: ProductCardHandle) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const ProductCardPattern = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value: initialValues?.count || 0, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>
            <div className={`${css.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    )
}


