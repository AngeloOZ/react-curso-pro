import { useContext } from 'react';
import { ProductContext } from '../ProductCardPattern';

import css from '../../styles/styles.module.css'

export const ProductTitle = ({ title = '' }: { title?: string }) => {
    const { product } = useContext(ProductContext);

    return (
        <span className={css.productDescription}>{title ? title : product.title}</span>
    )
}