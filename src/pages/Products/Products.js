import React from "react";
import { PRODUCTS } from "../../util/constants";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = () => {
  return (
    <>
      <div className="products-container">
        <div className="products">
          {PRODUCTS.map((prod) => (
            <Product
              id={prod.id}
              desc={prod.productDesc}
              image={prod.productImage}
              name={prod.productName}
              price={prod.price}
            />
          ))}
        </div>
      </div>
      <div className="view-cart">
        <Link className="cartLink" to="/cart">
          Proceed to Checkout
        </Link>
      </div>
    </>
  );
};

export default Products;
