import React from 'react'
import '../Bredcrum/Bredcrum.css'
import arrow_icon from '../../assets/arrow_icon.png'
// import Product from '../../pages/Product'

const Bredcrum = (props) => {
    const {product}=props
  return (
<div className="all">
      <div className='Bredcrum'>
  Home <img src={arrow_icon} alt="" />Shop<img src={arrow_icon} alt="" /> {product.category}
  <img src={arrow_icon} alt="" />{product.name}<img src={arrow_icon} alt="" />
    </div>
</div>
  )
}

export default Bredcrum
