import { ProductCardPattern } from '../components';
import { ProductImage, ProductTitle, ProductsButtons } from '../components';

import '../styles/custom-style.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

   const { shoppingCart, onProductCountChange } = useShoppingCart();

   return (
      <div>
         <h1>Shopping Store</h1>
         <hr />
         <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
         }}>

            {
               products.map((product) => (
                  <ProductCardPattern
                     product={product}
                     className='bg-dark text-white'
                     key={product.id}
                     // onChange={onProductCountChange}
                     onChange={(event) => onProductCountChange(event)}
                     value={shoppingCart[product.id]?.count || 0}
                  >
                     <ProductImage className='custom-img' />
                     <ProductTitle />
                     <ProductsButtons className='custom-buttons' />
                  </ProductCardPattern>

               ))
            }

            <div className="shopping-cart">
               {
                  Object.values(shoppingCart).map((product) => (
                     <ProductCardPattern
                        product={product}
                        className='bg-dark text-white'
                        style={{ width: '100px' }}
                        key={product.id}
                        onChange={onProductCountChange}
                        value={product.count}
                     >
                        <ProductImage className='custom-img' />
                        <ProductsButtons className='custom-buttons' />
                     </ProductCardPattern>
                  ))
               }
            </div>
         </div>
      </div>
   )
}
