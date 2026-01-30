
import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item.jsx'
import "./Popular.css"
function Popular() {
  return (
    <div>
      <div className="popular">
          <h1>Latest</h1>
      <div className="heading">
        
      </div>
        <div className="women-popular">
          {data_product.map((item,i)=>
          {
            return <Item Key={i} id={item.id} name={item.name} category={item.category} oldprice={item.old_price} newprice={item.new_price} image={item.image}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Popular
