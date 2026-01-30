import React, { useContext } from "react";
import "./cardItem.css";
import remove_icon from "../../assets/remove.webp";
import { Datacontext } from "../../context/Shopcontext";
function CardItem() {
  const { gettotalamount, all_product, cartItem, removefromcart } = useContext(Datacontext);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cartItems-format cartitems-format-main">
                <img src={e.image} alt="" />

                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity ">
                  {cartItem[e.id]}
                </button>
                <p id="pri">{e.new_price * cartItem[e.id]}</p>
                <img
                className="remove"
                  src={remove_icon}
                  alt=""
                  onClick={() => removefromcart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub Total</p>
              <p>${gettotalamount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${gettotalamount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      <div className="cartitems-promocode">
        <p>if you have a promo code, enter it here</p>
        <div className="cartitems-promobox">
          <div className="input-bac">
            <input type="text" placeholder="promo code" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
      </div>
  );
}

export default CardItem;
