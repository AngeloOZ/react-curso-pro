import { ProductCardPattern } from '../components';
import { ProductImage, ProductTitle, ProductsButtons } from '../components';

import '../styles/custom-style.css';
import { products } from '../data/products';


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
            <ProductCardPattern
               key={products[0].id}
               product={products[0]}
               className='bg-dark text-white'
               initialValues={{
                  count: 1,
                  maxCount: 10,
               }}
            >
               {({ reset, count, increaseBy, isMaxCountReached }) => (
                  <>
                     <ProductImage className='custom-img' />
                     <ProductTitle />
                     <ProductsButtons className='custom-buttons' />

                     <div>
                        <span>count: {count}</span>
                        <br />
                        <br />
                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}>-2</button>
                        {
                           !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
                        }
                     </div>
                  </>
               )}
            </ProductCardPattern>
         </div>
      </div>
   )
}
