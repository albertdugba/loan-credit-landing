import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./Header.scss";
import Banner from "./Banner/Banner";

const Header = () => {
  return (
    <div>
      <header className="header container">
        {/* 1 */}
        <div className="header__inner">
          <img src={logo} alt="AY MICROSCREDIT" className="header__logo" />
          <span>AY MICROSCREDIT</span>
        </div>

        {/* 2 */}

        <nav>
          <ul className="header__nav">
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Our Services</NavLink>
            </li>
            <li>
              <NavLink to="#">Our Products</NavLink>
            </li>
            <li>
              <NavLink to="#">FAQS</NavLink>
            </li>
            <li>
              <NavLink to="#">Apply Online</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Banner />
    </div>
  );
};

export default Header;
