import { ProductImage, ProductTitle, ProductsButtons } from './ProductCardItems';
import { ProductCardPattern as ProductCardHOC } from './ProductCardPattern';

export { ProductImage, ProductTitle, ProductsButtons } from './ProductCardItems';

export const ProductCardPattern = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductsButtons
});

// export default ProductCardPattern;