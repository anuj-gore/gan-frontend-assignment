import React from "react";
import "./Cart.css";
import { PRODUCTS } from "../../util/constants";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items, getTotalAmount, resetCart } = useContext(ShopContext);
  const { amount, products } = getTotalAmount();
  const checkoutHandler = () => {
    if (amount !== 0) {
      console.log({ items: products, totalAmount: amount });
      alert("Order details have been logged in console");
      resetCart();
    } else {
      alert("Cart is empty! Please add items to your cart to checkout");
    }
  };
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {amount ? (
          PRODUCTS.map((product) => {
            if (items[product.id] > 0)
              return (
                <CartItem
                  id={product.id}
                  name={product.productName}
                  image={product.productImage}
                  price={product.price}
                />
              );
          })
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
      <h2>{`Total: RS. ${amount}`}</h2>
      <div className="checkout-buttons">
        <div className="checkout-button">
          <Link className="checkout-link" to="/products">
            Go Back
          </Link>
        </div>
        <div onClick={checkoutHandler} className="checkout-button">
          Checkout
        </div>
      </div>
    </div>
  );
};

export default Cart;
