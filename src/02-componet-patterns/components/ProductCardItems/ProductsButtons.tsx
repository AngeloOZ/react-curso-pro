
import { ProductContext } from '../ProductCardPattern';
import css from '../../styles/styles.module.css'
import { useContext } from 'react';

interface Props {
    className?: string
    style?: React.CSSProperties
}

export const ProductsButtons = ({ className, style }: Props) => {

    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={`${css.buttonsContainer} ${className}`} style={style}>
            <button className={css.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
            <div className={css.countLabel}>{counter}</div>
            <button className={css.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
}