import React, { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import "./Offers.scss";
import woman from "../../assets/loan1.png";
import image2 from "../../assets/image2.png";
// import medic from "../../../assets/medic.svg";
import medic from "./medic.svg";
import loan from "../../assets/loan.svg";
import home from "../../assets/home.svg";

const Offers = () => {
  const [slides] = useState([
    // {
    //   imageUrl: "../../../assets/loan1.png",
    //   title: "Home improvements",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus eligendi dicta commodi delectus consequatur corrupti qui at, laboriosam quisquam voluptatem eaque dolorem doloribus aliquam eum nisi totam autem cum!",
    //   icon: woman,
    // },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/07/10/15/37/apple-5391076_1280.jpg",
      title: "Small Personal loans",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus eligendi dicta commodi delectus consequatur corrupti qui at, laboriosam quisquam voluptatem eaque dolorem doloribus aliquam eum nisi totam autem cum!",
      icon: loan,
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/25/19/58/fox-5220328_1280.jpg",
      title: "Home Investments",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus eligendi dicta commodi delectus consequatur corrupti qui at, laboriosam quisquam voluptatem eaque dolorem doloribus aliquam eum nisi totam autem cum!",
      icon: loan,
    },
  ]);

  // carousel defaults
  let [currentPosition, setCurrentPosition] = useState(0);
  let currentSlide = slides[currentPosition];

  const arrowRightClick = () => {
    currentPosition !== slides.length - 1
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition((currentPosition = 0));
    currentSlide = slides[currentPosition];
  };

  const arrowLeftClick = () => {
    currentPosition !== 0
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition((currentPosition = slides.length - 1));
    currentSlide = slides[currentPosition];
  };
  return (
    <div className="carousel container">
      <div className="carousel__title">
        <h1>Ways to Use a Personal loan</h1>
      </div>
      <div className="carousel__content">
        <div className="carousel__slider">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="carousel__slide--img"
          />
          <div>{currentSlide.description}</div>
          {/* <div>{currentSlide.icon}</div> */}
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
