import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

import bannerImg from "../../assets/banner.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div>
      <section className="banner container">
        <div className="banner__content">
          <h1>
            Lorem ipsum
            <br />
            dolor sit amet,
            <br />
            consectetur
          </h1>
          <div className="banner__content--text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, quis omnis nostrum accusamus corporis possimus est
              temporibus minus incidunt.
            </p>
          </div>

          <button className="banner__btn btn">
            <span>loan application</span>
            <FaLongArrowAltRight />
          </button>
        </div>

        <div className="banner__img">
          <img src={bannerImg} alt="AY MICROCREDIT" />
        </div>
      </section>

      <div className="highlight container">
        <h1>
          Lorem ipsum dolor sit amet, <br />
          consectetur
        </h1>
        <div className="highlight__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            <br />
            quibusdam ab impedit voluptatum explicabo modi reprehenderit dolor
            <br />
            autem est maxime ipsa dolores, distinctio ex placeat molestiae, ad
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
