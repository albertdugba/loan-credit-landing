import React from "react";

import "./NavItems.scss";
import NavItem from "../NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className="navigation__items">
      <NavItem link="/">Home</NavItem>
      <NavItem link="/services">our services</NavItem>
      <NavItem link="/products">our products</NavItem>
      <NavItem link="/faqs">faqs</NavItem>
      <NavItem link="/apply" exact>
        apply online
      </NavItem>
    </ul>
  );
};

export default NavItems;
