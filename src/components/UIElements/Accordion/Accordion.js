import React, { useState } from "react";

import "./Accordion.scss";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div
        className={`accordion__title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
        {title}
      </div>
      <div
        className={`accordion__item accordion__content ${
          !isOpen ? "collapsed" : ""
        }`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
