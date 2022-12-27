import React, { useContext, useState } from "react";
import "./Product.css";
import { ShopContext } from "../../context/shop-context";
const Product = (props) => {
  const { items, addToCart, removeFromCart } = useContext(ShopContext);
  const [hidden, setHidden] = useState(true);
  const [quantity, setQuantity] = useState(items[props.id]);

  return (
    <div className="product-container">
      <div
        className="product-top"
        onMouseEnter={() => {
          setHidden(false);
        }}
        onMouseLeave={() => {
          setHidden(true);
        }}
      >
        <img className="product-image" src={props.image} alt="" />
        {hidden ? "" : <div className="overlay">{props.desc}</div>}
      </div>
      <div className="product-name">{props.name}</div>

      <div className="product-bottom">
        <div className="product-price">RS. {props.price}</div>
        {quantity ? (
          <div className="quantity-editor">
            <button
              className="remove"
              onClick={() => {
                removeFromCart(props.id);
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="add"
              onClick={() => {
                addToCart(props.id);
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="product-add"
            onClick={() => {
              addToCart(props.id);
              setQuantity(quantity + 1);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
