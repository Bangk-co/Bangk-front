import React from "react";
import Slider from "react-slick";
import { Slider1 } from "./Banner/Slider1";
import { Slider2 } from "./Banner/Slider2";

const Banner = ({ isMobile }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <Slider1 isMobile={isMobile} />
      <Slider2 isMobile={isMobile} />
    </Slider>
  );
};

export default Banner;
