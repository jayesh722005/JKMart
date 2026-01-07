import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../assets/all_product";

export const Datacontext = createContext(null);
const getdefaultcart = () => {
  let cart = {};
  all_product.forEach((p) => {
    cart[p.id] = 0;
  });
  return cart;
};
const Shopcontext = (props) => {
  const [cartItem, setcartItems] = useState(getdefaultcart());
  const addtocart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removefromcart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const gettotalamount = () => {
    let totalamount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalamount += iteminfo.new_price * cartItem[item];
      }
    }
    return totalamount;
  };
  const gettotalcarditem = () => {
    let totalitem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
       totalitem += cartItem[item]
      }
    }
    return totalitem;
  };
  const productvalue = {
    all_product,
    cartItem,
    addtocart,
    removefromcart,
    gettotalamount,
    gettotalcarditem
  };
  return (
    <Datacontext.Provider value={productvalue}>
      {props.children}
    </Datacontext.Provider>
  );
};
export default Shopcontext;
