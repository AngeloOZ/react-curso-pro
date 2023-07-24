export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;
    
    increaseBy: (value: number) => void;
}

export interface PropsCardProduct {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string
}

export interface Product {
    id: number
    title: string
    img?: string
}

export interface ProductImageProps {
    img?: string
    title?: string
    className?: string
    style? : React.CSSProperties
}

export interface OnChangeArgs {
    product: Product
    count: number
}

export interface ProductInCart extends Product {
    count: number;
 }

 export interface InitialValues {
    count?: number;
    maxCount?: number;
 }

 export interface ProductCardHandle {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;


    increaseBy: (value: number) => void;
    reset: () => void;
 }