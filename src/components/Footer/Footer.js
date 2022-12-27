import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-socials">
        <span className="socials-text"> Follow us on</span>
        <div className="socials-logo">
          <a href="https://www.instagram.com/" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className="footer-locations">
        <span className="locations-text">We currently serve </span>
        <ul className="location-list">
          <li>Mumbai</li>
          <li>Delhi</li>
          <li>Bangalore</li>
        </ul>
      </div>
      <div className="footer-contact">
        <span className="contact-text">We take event orders!</span>
        <div className="contact-number">
          <BsWhatsapp />
          +91 99999 99999
        </div>
      </div>
    </div>
  );
};

export default Footer;
