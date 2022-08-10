import React from 'react'
import { ProductCard, ProductImage, ProductTitle ,ProductButtons} from '../components'
import "../styles/custom-styles.css"
export const ShoppingPage = () => {
    const product = {
        id :'1',
        title: 'Coffe Mug'
    }
  return (
    <>
    <div>ShoppingPage</div>
    <div  style={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {/* <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle title={'hola mundos'}/>
        </ProductCard> */}
        <ProductCard className="bg-dark" product={product}>
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white"/>
            <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard>
        <ProductCard product={product} >
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>
        </ProductCard>
        <ProductCard product={product} style={{backgroundColor:'blue'}}>
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
