import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./Credit.scss";
import credit from "../../assets/credit.png";

const Credit = () => {
  return (
    <div className="credit">
      <div className="credit__container container">
        <div className="credit__title">
          <h1>
            fill out our online <br />
            loan application form
            <br />
          </h1>

          <p className="credit__text">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Perferendis totam repudiandae <br />
            voluptatum laudantium quia <br /> perspiciatis doloremque rerum amet
            modi tenetur!
          </p>
          <div className="banner__btn btn">
            <span>loan application</span>
            <FaLongArrowAltRight />
          </div>
        </div>

        <div className="credit__img">
          <img src={credit} alt="tax form" />
        </div>
      </div>
    </div>
  );
};

export default Credit;
