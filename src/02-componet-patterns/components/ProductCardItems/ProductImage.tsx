import { useContext } from 'react';
import { ProductImageProps } from "../../interfaces/Product";
import { ProductContext } from "../ProductCardPattern";

import css from '../../styles/styles.module.css'
import noImage from '../../assets/no-image.jpg'

export const ProductImage = ({ img = '', title = '', className, style }: ProductImageProps) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;
    let titleToShow: string = title;

    if (title) {
        titleToShow = title;
    } else if (product.title) {
        titleToShow = product.title;
    } else {
        titleToShow = 'No title';
    }

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img className={`${css.productImg} ${className}`} style={style} src={imgToShow} alt={titleToShow} />
    )
}