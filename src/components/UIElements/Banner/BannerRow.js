import React from "react";
import blackPerson from "../../assets/black-person.png";

import "./Banner.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerRow = () => {
  return (
    <section className="middle container">
      <div className="middle__img">
        <img src={blackPerson} alt="Black Person" />
      </div>
      <div className="middle__content">
        <div className="middle__content--title">
          <span>
            Continuos
            <br />
            performance
            <br />
            management software
          </span>
        </div>

        <p className="middle__content--text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          <br />
          culpa, similique sequi accusantium odit quibusdam officiis voluptatem
          <br />
          accusamus aliquid atque repellendus possimus soluta, autem quaerat
          <br />
          recusandae sit pariatur unde, sapiente ducimus? Totam odio ullam aut
          <br />
          aspernatur ipsa omnis nam, dicta ad possimus incidunt provident quo
          sapiente aperiam, odit labore consequatur!
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

export default BannerRow;
