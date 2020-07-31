import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useIntersection } from "react-use";
import gsap from "gsap";

import blackPerson from "../../assets/black-person.png";
import "./Banner.scss";

const BannerMiddle = () => {
  const bannerRef = useRef(null);

  const intersection = useIntersection(bannerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power3.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.9
    ? fadeOut(".fadeOut")
    : fadeIn(".fadeIn");
  return (
    <section className="banner__middle container" ref={bannerRef}>
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
