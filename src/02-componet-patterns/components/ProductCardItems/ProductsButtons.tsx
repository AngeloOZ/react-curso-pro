
import { ProductContext } from '../ProductCardPattern';
import css from '../../styles/styles.module.css'
import { useContext, useCallback } from 'react';

interface Props {
    className?: string
    style?: React.CSSProperties
}

export const ProductsButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )


    // true si counter === maxCount 

    return (
        <div className={`${css.buttonsContainer} ${className}`} style={style}>
            <button className={css.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
            <div className={css.countLabel}>{counter}</div>
            <button className={`${css.buttonAdd} ${isMaxReached() && css.disabled}`} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
}