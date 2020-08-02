import React from "react";

import "./BackDrop.scss";

const BackDrop = ({ show, clicked }) => {
  return show ? <div className="backdrop" onClick={clicked}></div> : null;
};

export default BackDrop;
