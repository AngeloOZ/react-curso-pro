import React from 'react'
import { ProductCardPattern } from '../components';
import { ProductImage, ProductTitle, ProductsButtons } from '../components';
import { ProductCard } from '../components/ProductCard';

import '../styles/custom-style.css';

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
          <ProductCardPattern.Image title='Hola' className='custom-img' />
          <ProductCardPattern.Title title='Hola' />
          <ProductCardPattern.Buttons />
        </ProductCardPattern>

        <ProductCardPattern 
          product={product2}
          className='bg-dark text-white'
        >
          <ProductImage className='custom-img' />
          <ProductTitle />
          <ProductsButtons className='custom-buttons'  />
        </ProductCardPattern>

      </div>
    </div>
  )
}
