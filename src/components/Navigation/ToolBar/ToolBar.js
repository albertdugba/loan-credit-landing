import React from "react";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";
import NavItems from "../NavItems/NavItems";
import "./ToolBar.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

const ToolBar = ({ toggleSideDrawer }) => {
  return (
    <header className="toolbar container">
      <ToggleButton clicked={toggleSideDrawer} />
      <motion.div
        className="toolbar__logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.02, type: "spring", stiffness: 120 }}>
        <img src={logo} alt="AY MICROCREDIT" />
        <div className="toolbar__logo--brand">ay microcredit</div>
      </motion.div>
      <nav className="toolbar__desktop--display">
        <NavItems />
      </nav>
    </header>
  );
};

export default ToolBar;
