import React from "react";

import "./Footer.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={logo} alt="Logo" className="footer__img" />
            <span>AY MICROCREDIT</span>
          </div>

          <div className="footer__nav">
            <ul>
              <li>products</li>
              <li>loan application</li>
              <li>contact</li>
              <li>faqs</li>
              <li>about us</li>
            </ul>
          </div>

          <div className="footer__nav">
            <ul>
              <li>products</li>
              <li>loan application</li>
              <li>contact</li>
              <li>faqs</li>
              <li>about us</li>
            </ul>
          </div>

          <div className="footer__nav">
            <ul>
              <li>4140 Parker Rd.</li>
              <li>Allentown, New</li>
              <li>Mexico 31134</li>

              <li>(406) 555-0120</li>
            </ul>
          </div>
        </div>
        <div className="footer__line"></div>
      </div>
    </div>
  );
};

export default Footer;
