import React , {useState}from 'react'
import { ProductCard, ProductImage, ProductTitle ,ProductButtons} from '../components'
import { products } from '../data/products'
import { Product } from '../interfaces/interfaces'
import "../styles/custom-styles.css"
export const ShoppingPage = () => {
   
   const product = products[0]
   
  return (
    <>
    <div>ShoppingPage</div>
    <div  style={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {/* <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle title={'hola mundos'}/>
        </ProductCard> */}
        <>
      
                <ProductCard product={product} className="bg-dark text-white" key={product.id} initialValues={{count:4, maxCount:10}} >
                   {(args)=>(
                    <>
                      <ProductImage className='custom-image' />
                      <ProductTitle className='text-bold'/>
                      <ProductButtons className='custom-buttons'/>
                      <button onClick={args.reset}>Reset</button>
    
                    </>
                                )
                   
                   }
                        </ProductCard>
             
        </>
    </div>
   
   
    </>
  )
}
