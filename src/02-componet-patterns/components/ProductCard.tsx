import css from '../styles/styles.module.css'

import noImage from '../assets/no-image.jpg'

import { useProduct } from '../hooks'

interface Props {
    product: Product
}

interface Product {
    id: number
    title: string
    img?: string
}

export const ProductCard = ({ product }: Props) => {
    const { counter, increaseBy } = useProduct()

    return (
        <div className={css.productCard}>

            <img className={css.productImg} src={product.img ? product.img : noImage} alt={product.title} />

            <span className={css.productDescription}>{product.title}</span>

            <div className={css.buttonsContainer}>
                <button className={css.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
                <div className={css.countLabel}>{counter}</div>
                <button className={css.buttonAdd} onClick={() => increaseBy(1)}> + </button>
            </div>
        </div>
    )
}
