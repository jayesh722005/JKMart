import React, { useContext } from 'react'
import '../Css/Shopcategory.css'

import { Datacontext } from '../context/Shopcontext'
import Item from "../component/Item/Item.jsx"
const Shopcategory=(props)=>
{
const { all_product }=useContext(Datacontext)



  return(
    <div className="shopcategory">
        <img src={props.banner} alt="" />
        <div className="product">
          {all_product.map((item,i)=>
          {
            if(props.category===item.category)
            {
              return <Item key={i} id={item.id}  name={item.name} image={item.image} oldprice={item.old_price} newprice={item.new_price} />
            }
          
          })}
        </div>
        <div className="button">
          <button>Explore</button>
        </div>
        
    </div>
  )
}

export default Shopcategory
