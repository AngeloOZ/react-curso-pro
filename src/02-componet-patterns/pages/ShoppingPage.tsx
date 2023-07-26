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
               initialValues={{
                  count: 1,
                  maxCount: 10,
               }}
            >
               {({ reset, count, increaseBy, isMaxCountReached, product, maxCount }) => (
                  <>
                     <ProductImage />
                     <ProductTitle />
                     <ProductsButtons />
                  </>
               )}
            </ProductCardPattern>
         </div>
      </div>
   )
}
