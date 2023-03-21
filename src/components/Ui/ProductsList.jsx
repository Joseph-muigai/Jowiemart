import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
  return (
    <>
        {
         data?.map((product) =>(

           <ProductCard key={product.id} product={product} />
         ) 
          
          )
        }
    </>
  )
}

export default ProductsList