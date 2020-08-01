import React, { useState, Fragment } from "react";

import "./Layout.scss";
import ToolBar from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Fragment>
      <ToolBar toggleSideDrawer={sideDrawerHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className="layout__content">{children}</main>
    </Fragment>
  );
};

export default Layout;
