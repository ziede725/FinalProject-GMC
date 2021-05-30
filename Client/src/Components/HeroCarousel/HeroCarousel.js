import React from "react";
import Slider from "react-slick";

import HeroCarouselItem from "./HeroCarouselItem";

const HeroCarousel = ({ Movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {Movies.map((movie, index) => (
        <HeroCarouselItem key={index} movie={movie} />
      ))}
    </Slider>
  );
};

export default HeroCarousel;
