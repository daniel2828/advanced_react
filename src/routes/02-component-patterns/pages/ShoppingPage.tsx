import React from 'react'
import { ProductCard, ProductImage, ProductTitle ,ProductButtons} from '../components'

export const ShoppingPage = () => {
    const product = {
        id :'1',
        title: 'Coffe Mug'
    }
  return (
    <>
    <div>ShoppingPage</div>
    <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {/* <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle title={'hola mundos'}/>
        </ProductCard> */}
        <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title/>
            <ProductCard.Buttons/>
        </ProductCard>
        <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>
        </ProductCard>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
    </div>
    </>
  )
}
