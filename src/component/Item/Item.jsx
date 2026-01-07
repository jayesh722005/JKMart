import React from 'react'
import "../Item/Item.css"
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      <h2>{props.name}</h2>
      <div className="item-price">
         <div className="new-price">
           <h3>${props.newprice}</h3>
        </div>
        <div className="old-price">
            <h3>{props.oldprice}</h3>
        </div>
       
      </div>
    </div>
  )
}

export default Item
