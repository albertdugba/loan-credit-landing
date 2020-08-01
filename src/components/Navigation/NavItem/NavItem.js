import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItem.scss";

const NavItem = ({ children, link, exact }) => {
  return (
    <li className="navigation__item">
      <NavLink to={link} exact={true}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
