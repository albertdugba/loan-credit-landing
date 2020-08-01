import React from "react";

import "./Header.scss";
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
