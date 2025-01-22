import React from "react";
import "./Footer.css";
import LogoLight from "../../assets/images/logo-light.svg";
import EmailArrow from "../../assets/icons/email-arrow.svg";
import telegram from "../../assets/icons/social/telegram.svg";
import discord from "../../assets/icons/social/discord.svg";
import instagram from "../../assets/icons/social/instagram.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import youtube from "../../assets/icons/social/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="footer-logo">
        <img src={LogoLight} alt="" />
        <p>For a better future and crime-free cities</p>
      </div>
      <div className="footer-email flex column">
        <h1>Subscribe for our newslatters</h1>
        <div className="email-container">
          <input type="text" placeholder="E-mail" />
          <button type="button">
            <img src={EmailArrow} alt="" />
          </button>
        </div>
        <div className="social flex center">
          <a href="https://web.telegram.org/" target="_blank">
            <img src={telegram} alt="" />
          </a>
          <a href="http://discord.com" target="_blank">
            <img src={discord} alt="" />
          </a>
          <a href="http://instagram.com" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a href="http://x.com" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="http://youtube.com" target="_blank">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-info flex">
        <div className="footer-info-1 flex column">
          <ul className="footer-ul flex column">
            <li>The Trace</li>
            <li>About Us</li>
          </ul>
          <ul className="footer-ul flex column">
            <li>Contact Us</li>
            <li>thetrace@gmail.com</li>
          </ul>
        </div>
        <div className="footer-info-1 flex column">
          <ul className="footer-ul flex column">
            <li>Policies</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-info-1 flex column">
          <ul className="footer-ul flex column">
            <li>Help center</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
