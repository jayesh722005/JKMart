import React from "react";
import "./productdisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { useContext } from "react";
import { Datacontext } from "../../context/Shopcontext";
function ProductDisplay(props) {
  const { product } = props;
  const {addtocart}=useContext(Datacontext)
  return (
    <div className="productdisplay">
      <div className="left">
        <div className="productlist-left">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productlist-right">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
            <p>(150)</p>
        </div>
        <div className="right-price">
          <div className="price">
             <div className="old-price">${product.old_price}</div>
            <div className="product-new-price">${product.new_price}</div>
          </div>
          <div className="description">
            <h2>Available offers</h2>
            <p>
              Bank Offer5% cashback on Axis Bank Flipkart Debit Card up to
              ₹750T&C
            </p>
            <p>
              Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto
              ₹4,000 per statement quarterT&C
            </p>
            <p>
              Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000 per
              calendar quarterT&C
            </p>
            <p>
              No cost EMI ₹2,500/month. Standard EMI also availableView Plans
            </p>
            <p>Bank Offer₹1250 Off On HDFC Bank Debit Card EMI Transactions.T&C</p>
            <p>Bank Offer₹1250 Off On Selected Banks Credit and Debit Card TransactionsT&C</p>
          </div>
          <div className="right-size">
            <h1>select size</h1>
            <div className="size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button className="product-button" onClick={()=>addtocart(product.id)}>ADD TO CART</button>
          <div className="product-category">
            <span>
              Category: <span>Women,T-shirt,Crop Top</span>
            </span>
          </div>
          <div className="product-Tags">
            <span>
              Category: <span>Modern,Latest,Trend shorts</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
