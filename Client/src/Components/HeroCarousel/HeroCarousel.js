import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import HeroCarouselItem from "./HeroCarouselItem";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);
const HeroCarousel = ({ Movies }) => {
  console.log();
  const [swiper, setSwiper] = useState(null);

  console.log(swiper);
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      onSlideChange={() => console.log("slide change")}
    >
      {Movies.map((movie) => (
        <SwiperSlide style={{ width: "80vw" }}>
          <HeroCarouselItem movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
