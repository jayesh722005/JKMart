import React from 'react'
import "../Offer/Offer.css"
import exclu from "../../assets/exclu.webp"
function Offer() {
  return (
  <div className="offer">
    <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offer For You </h1>
        <p>Only For Best Seller Product</p>
        <button>Check Now</button>
    </div>
    <div className="offer-right">
    <img src={exclu} alt="" />
    </div>
  </div>
  )
}

export default Offer
