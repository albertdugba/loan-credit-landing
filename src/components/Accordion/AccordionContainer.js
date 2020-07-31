import React from "react";
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
    </div>
  );
};

export default AccordionContainer;
