import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import { FaLongArrowAltRight } from "react-icons/fa";

import bannerImg from "../../assets/banner.png";
import "./Banner.scss";

const Banner = () => {
  let tl = new TimelineLite();

  // images
  let app = useRef(null);
  let firstImage = useRef(null);

  // content

  let headlineFirst = useRef(null);
  let secondHeadline = useRef(null);
  let thirdHeadline = useRef(null);

  useEffect(() => {
    TweenMax.to(app, { css: { visibility: "visible" } });
    tl.from(
      firstImage,
      1.2,
      { x: 1300, ease: Power3.easeOut, scale: 1.5 },
      0.2,
      "start"
    );

    // content animation

    tl.staggerFrom(
      [headlineFirst, secondHeadline, thirdHeadline],
      1,
      {
        y: 20,
        ease: Power3.easeOut,
        delay: 0.1,
      },
      0.15,
      "start"
    );
    // .from(button, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div>
      <section className="banner container" ref={el => (app = el)}>
        <div className="banner__content">
          <h1>
            <div ref={el => (headlineFirst = el)}> Lorem ipsum</div>
            <br />
            <div ref={el => (secondHeadline = el)}> dolor sit amet,</div>
            <br />
            <div ref={el => (thirdHeadline = el)}> consectetur</div>
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

        <div className="banner__img" ref={el => (firstImage = el)}>
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
