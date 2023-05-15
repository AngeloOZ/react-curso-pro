import React from 'react'
import { ProductCardPattern } from '../components';
import { ProductImage, ProductTitle, ProductsButtons } from '../components';
import { ProductCard } from '../components/ProductCard';

const product = {
  id: 1,
  title: 'Coffe Mug',
  img: './coffee-mug.png'
}
const product2 = {
  id: 1,
  title: 'Coffe Mug Pattern',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>

        {/* <ProductCard product={product} /> */}

        <ProductCardPattern product={product} >
          <ProductCardPattern.Image title='Hola' />
          <ProductCardPattern.Title title='Hola' />
          <ProductCardPattern.Buttons />
        </ProductCardPattern>

        <ProductCardPattern product={product2} >
          <ProductImage />
          <ProductTitle />
          <ProductsButtons />
        </ProductCardPattern>

      </div>
    </div>
  )
}
