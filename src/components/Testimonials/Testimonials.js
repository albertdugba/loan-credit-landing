import React from "react";

// import image1 from "../../assets/about5.png";
// import image2 from "../../assets/about3.png";
// import image3 from "../../assets/about4.png";
import people from "./people.png";

import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials container">
      <div className="testimonials__header">
        <h1>Our Clients are happy</h1>
        <h4>Testimonials</h4>
      </div>

      <div className="testimonials__inner">
        <div className="testimonials__inner--text">
          <blockquote>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto incidunt alias a ipsum earum quod reprehenderit tempora
              repudiandae sunt, voluptas ex assumenda excepturi facere minus
              odit. Quia ex facilis laudantium cumque assumenda consequuntur
              possimus eius animi perferendis? Dicta dolores veritatis, ipsa
              quae quibusdam modi unde?
            </p>
            <div className="testimonials__info">
              <span>John Doe</span>
              <span>Doe Industries</span>
            </div>
          </blockquote>
        </div>

        <div className="testimonials__inner--media">
          {/* <img src={image2} alt="" />
          <img src={image1} alt="" />
          <img src={image3} alt="" /> */}
          <img src={people} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
