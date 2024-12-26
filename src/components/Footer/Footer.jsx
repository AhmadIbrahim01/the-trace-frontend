import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="" alt="" />
        <p>For a better future and crime-free cities</p>
      </div>
      <div className="footer-email">
        <h1>Subscribe for our newslatters</h1>
        <div className="email-container">
          <input type="text" />
          <img src="" alt="" />
        </div>
        <div className="social">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="footer-info">
        <div>
          <div>
            <ul>
              <li>The Trace</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Contact Us</li>
              <li>thetrace@gmail.com</li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>Policies</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help center</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
