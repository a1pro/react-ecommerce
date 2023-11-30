import React from "react";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <h3>Let Us Help You</h3>
        <ul>
          <li>Policy</li>
          <li>Track order</li>
          <li>Return and Refund</li>
        </ul>
      </div>

      <div className="footer__section">
        <h3>Get to Know Us</h3>
        <ul>
          <li>Careers</li>
          <li>About Us</li>
          <li>Amazon Science</li>
        </ul>
      </div>

      <div className="footer__section">
        <h3>Contact</h3>
        <p>123 Street, City</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>

      <div className="footer__section">
        <h3>Follow Us</h3>
        <div className="footer__socialIcons">
          <img src={fb} className="icons-img" />
          <img src={insta} className="icons-img" />
          <img src={twitter} className="icons-img" />
          <img src={youtube} className="icons-img" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
