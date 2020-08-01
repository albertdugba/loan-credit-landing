import React from "react";

import logo from "../../../assets/logo.png";
import NavItems from "../NavItems/NavItems";
import "./ToolBar.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

const ToolBar = ({ toggleSideDrawer }) => {
  return (
    <header className="toolbar container">
      <ToggleButton clicked={toggleSideDrawer} />
      <div className="toolbar__logo">
        <img src={logo} alt="AY MICROCREDIT" />
        <div className="toolbar__logo--brand">ay microcredit</div>
      </div>
      <nav className="toolbar__desktop--display">
        <NavItems />
      </nav>
    </header>
  );
};

export default ToolBar;
