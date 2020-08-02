import React from "react";
import "./SideDrawer.scss";
import BackDrop from "../BackDrop/BackDrop";
import NavItems from "../NavItems/NavItems";
import logo from "../../../../assets/logo.png";

const SideDrawer = ({ open, closed }) => {
  let joinedClasses = ["sidedrawer close"];

  if (open) {
    joinedClasses = ["sidedrawer open"];
  }
  return (
    <div>
      <BackDrop show={open} clicked={closed} />
      <div className={joinedClasses.join(" ")} onClick={closed}>
        <div className="sidedrawer__logo">
          <img
            src={logo}
            alt="AY MIRCROCREDIT"
            style={{ width: "70px", justifyItems: "center" }}
          />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
