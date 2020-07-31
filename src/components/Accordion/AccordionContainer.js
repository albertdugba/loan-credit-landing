import React from "react";
import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";
import Accordion from "./Accordion";

import "./Accordion.scss";

const AccordionContainer = () => {
  return (
    <div className="wrapper container">
      <div className="accordion__header">
        <span>Frequently asked</span>
        <br />
        <span>questions</span>
      </div>
      <Accordion title="Accusman cursus malesuada est aliquam egestas donec">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum repudiandae nisi sit, iure dolorum culpa perspiciatis sequi
          optio eveniet exercitationem maiores laboriosam ad, corporis, enim
          deserunt sunt blanditiis. Nesciunt beatae iste laborum expedita sed
          sequi provident praesentium nisi consectetur.
        </p>
      </Accordion>
      <Accordion title="Accusman cursus malesuada est aliquam egestas donec">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum repudiandae nisi sit, iure dolorum culpa perspiciatis sequi
          optio eveniet exercitationem maiores laboriosam ad, corporis, enim
          deserunt sunt blanditiis. Nesciunt beatae iste laborum expedita sed
          sequi provident praesentium nisi consectetur.
        </p>
      </Accordion>
      <Accordion title="Accusman cursus malesuada est aliquam egestas donec">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum repudiandae nisi sit, iure dolorum culpa perspiciatis sequi
          optio eveniet exercitationem maiores laboriosam ad, corporis, enim
          deserunt sunt blanditiis. Nesciunt beatae iste laborum expedita sed
          sequi provident praesentium nisi consectetur.
        </p>
      </Accordion>
      <div className="accordion__link">
        <div className="link">
          <Link to="#" className="link__learn--more">
            <span>see more</span>
          </Link>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default AccordionContainer;
