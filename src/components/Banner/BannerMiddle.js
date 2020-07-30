import React from "react";
import blackPerson from "../../assets/black-person.png";

import "./Banner.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerMiddle = () => {
  return (
    <section className="banner__middle container">
      <div className="banner__img">
        <img src={blackPerson} alt="Black Person" />
      </div>
      <div className="banner__content">
        <div className="banner__content--title">
          <span>
            Continuos
            <br />
            performance
            <br />
            management software
          </span>
        </div>

        <p className="banner__content--text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          <br />
          culpa, similique sequi accusantium odit quibusdam officiis voluptatem
          <br />
          accusamus aliquid atque repellendus possimus soluta, autem quaerat
          <br />
          recusandae sit pariatur unde, sapiente ducimus? Totam odio ullam aut
        </p>

        <div className="link">
          <Link to="#" className="link__learn--more">
            <span>learn more</span>
          </Link>
          <FaLongArrowAltRight />
        </div>
      </div>
    </section>
  );
};

export default BannerMiddle;
