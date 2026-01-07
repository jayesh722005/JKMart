import React from 'react'
import '../Newcollection/Newcollection.css'

import Item from "../Item/Item.jsx"
import new_collections from '../../assets/newcollections.js'
function Newcollection() {
  return (
  <div className="newcollection">
        <h1>New Collections</h1>
        <div className="heading"></div>
        <hr />
        <div className="collection">
           {
            new_collections.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} oldprice={item.old_price} newprice={item.new_price}/>
            })
           }
        </div>
  </div>
  )
}

export default Newcollection
