import React , {useState}from 'react'
import { ProductCard, ProductImage, ProductTitle ,ProductButtons} from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { Product } from '../interfaces/interfaces'
import "../styles/custom-styles.css"
export const ShoppingPage = () => {
   
  const {shoppingCart, onProductCountChange} = useShoppingCart();
   
   
  return (
    <>
    <div>ShoppingPage</div>
    <div  style={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {/* <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle title={'hola mundos'}/>
        </ProductCard> */}
        <>
             {products.map(product=>{
                return(
                <ProductCard value={shoppingCart[product.id]?.count} onChange={onProductCountChange} product={product} className="bg-dark text-white" key={product.id} >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold'/>
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>
                )
            })}
    
        </>
    </div>
    <div className='shopping-cart'>
        { 
         Object.entries(shoppingCart).map(([key,product])=>(
            <ProductCard key={key} onChange={onProductCountChange}
            style={{width:'100px'}} value={product.count} product={product} className="bg-dark text-white"  >
                <ProductImage className='custom-image' />
                <ProductTitle className='text-bold'/>
                <ProductButtons className='custom-buttons'/>
            </ProductCard>
        ) )          
        
       
        }

    </div>
   
    </>
  )
}
