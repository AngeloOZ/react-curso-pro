export interface ProductContextProps {
    counter: number
    increaseBy: (value: number) => void
    product: Product
}

export interface PropsCardProduct {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
}

export interface Product {
    id: number
    title: string
    img?: string
}

export interface ProductImageProps {
    img?: string
    title?: string
}
