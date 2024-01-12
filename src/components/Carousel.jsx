import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_image_1 from "../assets/img_1.jpeg";
import slide_image_2 from "../assets/img_2.avif";
import slide_image_3 from "../assets/img_3.avif";
import slide_image_4 from "../assets/img_4.jpeg";
import slide_image_5 from "../assets/img_5.jpg";
import slide_image_6 from "../assets/img_6.jpg";
function Carousel() {
  const swiperRef = useRef(null);

  const slideItems = [
    {
      image: slide_image_6,
    },
    {
      image: slide_image_1,
    },
    {
      image: slide_image_2,
    },
    {
      image: slide_image_5,
    },
    {
      image: slide_image_3,
    },
    {
      image: slide_image_6,
    },
    {
      image: slide_image_5,
    },
    {
      image: slide_image_6,
    },
    {
      image: slide_image_4,
    },
  ];
  return (
    <div className="container">
      <h1 className="heading">Carousel Slider</h1>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            delay: 1000,
            spaceBetween: 10,
            centeredSlides: true,
          },

          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            delay: 1000,
            spaceBetween: 10,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            delay: 1000,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1224: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            delay: 1000,
            spaceBetween: 20,
            centeredSlides: true,
          },
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slideItems.map((item, idx) => (
          <SwiperSlide>
            <div className="carousel-img-container">
              <img
                src={item.image}
                alt="slide_image"
                className="carousel-image"
                style={{ width: "30rem" }}
              />

              <div className="carousel-text-container">
                <h1>Heading</h1>
                <h3>Sub-Heading</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
