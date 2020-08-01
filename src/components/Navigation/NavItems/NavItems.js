import React from "react";

import "./NavItems.scss";
import NavItem from "../NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className="navigation__items">
      <NavItem link="/">Home</NavItem>
      <NavItem link="#">our services</NavItem>
      <NavItem link="#">our products</NavItem>
      <NavItem link="#">faqs</NavItem>
      <NavItem link="#" exact>
        apply online
      </NavItem>
    </ul>
  );
};

export default NavItems;
