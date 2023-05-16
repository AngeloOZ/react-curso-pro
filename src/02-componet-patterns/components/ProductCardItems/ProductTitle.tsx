import { useContext } from 'react';
import { ProductContext } from '../ProductCardPattern';

import css from '../../styles/styles.module.css'

interface Props {
    title?: string
    className?: string
    style?: React.CSSProperties
}

export const ProductTitle = ({ title = '', className, style }: Props) => {
    const { product } = useContext(ProductContext);

    return (
        <span className={`${css.productDescription} ${className}`} style={style}>{title ? title : product.title}</span>
    )
}