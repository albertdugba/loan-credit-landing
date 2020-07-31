import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/logo.png";
import Banner from "../Banner/Banner";
import BannerMiddle from "../Banner/BannerMiddle";
import BannerRow from "../Banner/BannerRow";
import Offers from "../Offers/Offers";
import Credit from "../Offers/Credit";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import AccordionContainer from "../Accordion/AccordionContainer";

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
              <NavLink to="#" exact={true} activeClassName="is__active">
                Apply Online
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Banner />
      <BannerMiddle />
      <BannerRow />
      <Offers />
      <Credit />
      <AccordionContainer />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Header;
