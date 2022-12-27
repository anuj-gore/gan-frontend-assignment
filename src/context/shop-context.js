import React from "react";
import { PRODUCTS } from "../util/constants";
import { useState } from "react";
import { createContext } from "react";
export const ShopContext = createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; ++i) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [items, setItems] = useState(defaultCart());
  const resetCart = () => {
    setItems(defaultCart());
  };
  const getTotalAmount = () => {
    let amount = 0;
    let products = [];
    for (const item in items) {
      if (items[item] > 0) {
        let product = PRODUCTS.find((elem) => elem.id === Number(item));
        if (product) {
          amount += product.price * items[item];
          products.push({
            item: product.productName,
            price: product.price,
            quantity: items[item],
          });
        }
      }
    }
    return { amount, products };
  };
  const addToCart = (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = {
    items,
    addToCart,
    removeFromCart,
    getTotalAmount,
    resetCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
