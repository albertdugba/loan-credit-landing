import React from "react";

import "./ToggleButton.scss";

const ToggleButton = ({ clicked }) => {
  return (
    <div className="toggle__button" onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ToggleButton;
