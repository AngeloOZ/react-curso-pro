import { Product } from "../interfaces/Product";

const product = {
    id: 1,
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}
const product2 = {
    id: 2,
    title: 'Coffe Mug Pattern',
    img: './coffee-mug2.png'
}

export const products: Product[] = [product, product2];