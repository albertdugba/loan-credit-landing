import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import "./Offers.scss";
import loan from "../../../assets/loan1.png";
import loan2 from "../../../assets/loan.svg";
import l from "../../../assets/l.svg";
import money from "../../../assets/image2.png";

const Offers = () => {
  return (
    <div className="carousel container">
      <div className="carousel__title">
        <h1>Ways to Use a Personal loan</h1>
      </div>
      {/* 1 */}
      <div className="carousel__inner">
        <div className="carousel__content">
          <img src={loan} alt="" className="carousel__img" />
          <img
            src={loan2}
            alt=""
            style={{ width: "50px", marginTop: "15px" }}
          />
          <h3>Home Improvement</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            atque suscipit consequuntur minima
          </p>
          <div className="link">
            <Link to="#" className="link__learn--more">
              <span>learn more</span>
            </Link>
            <FaLongArrowAltRight />
          </div>
        </div>

        {/* 2 */}
        <div className="carousel__content">
          <img src={money} alt="" className="carousel__img" />
          <img src={l} alt="" style={{ width: "50px", marginTop: "15px" }} />
          <h3>Small personal loan</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            atque suscipit consequuntur minima
          </p>
          <div className="link">
            <Link to="#" className="link__learn--more">
              <span>learn more</span>
            </Link>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      <div className="carousel__controls">
        <div className="carousel__control">
          <FaLongArrowAltLeft />
        </div>
        <div className="carousel__control">
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default Offers;
