import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCake3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-brand">
            <RiCake3Line className="logo" /> THE CAKE SHOP
          </Link>
          <ul className="nav-menu" id={toggle ? "hidden" : ""}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
          <div className="nav-toggle" onClick={handleClick}>
            {toggle ? <IoCloseSharp /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
