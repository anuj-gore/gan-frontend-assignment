import React from "react";
import { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./CartItem.css";

const CartItem = (props) => {
  const { items, addToCart, removeFromCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(items[props.id]);

  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={props.image} alt="" />
      <div className="cart-item-name">{props.name}</div>
      <div className="cart-item-price">RS. {props.price}</div>
      <div className="cart-quantity-editor">
        <button
          className="cart-remove"
          onClick={() => {
            removeFromCart(props.id);
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <span className="cart-quantity">{quantity}</span>
        <button
          className="cart-add"
          onClick={() => {
            addToCart(props.id);
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
