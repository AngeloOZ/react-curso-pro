
import { ProductContext } from '../ProductCardPattern';
import css from '../../styles/styles.module.css'
import { useContext } from 'react';

export const ProductsButtons = () => {

    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={css.buttonsContainer}>
            <button className={css.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
            <div className={css.countLabel}>{counter}</div>
            <button className={css.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
}