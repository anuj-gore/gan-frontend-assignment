import React from "react";
import flour from "../../static/flour.png";
import love from "../../static/love.png";
import clock from "../../static/clock.png";
import "./Home.css";
import Value from "../../components/Value/Value";
import { Link } from "react-router-dom";
import { VALUES } from "../../util/constants";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-container">
          <div className="about">
            <div className="title">About Us</div>
            <hr />
            <div className="description">
              The Cake Shop means 'The Cake Shop'. It doesn't have to be
              complicated now, does it? We provide an indulgent range of
              offerings that include brownies, desserts, chocolates, breads and
              well ... cakes. From our humble beginnings in 2004, when our first
              store opened its doors in Mumbai, we've been growing as a chain of
              patisseries with stores in Mumbai, Delhi NCR, and Bengaluru. Our
              mission is to spread happiness by serving smiles on a plate, and
              this journey continues as we open Cake Shops across the country.
            </div>
          </div>
          <div className="values">
            <div className="title">Our Values</div>
            <hr />
            <div className="values-list">
              {VALUES.map((value) => (
                <Value
                  image={value.image}
                  title={value.title}
                  desc={value.desc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="home-button">
          <Link className="home-button-link" to="/products">
            View Our Offerings
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
