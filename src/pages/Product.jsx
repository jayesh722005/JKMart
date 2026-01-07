import React, { useContext } from 'react'

import { Datacontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Bredcrum from '../component/Bredcrum/Bredcrum'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'

const Product = () => {
    const {all_product}=useContext(Datacontext)
    const {productId}=useParams();
    const productall=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Bredcrum product={productall}/>
      <ProductDisplay product={productall}/>
    </div>
  )
}

export default Product
