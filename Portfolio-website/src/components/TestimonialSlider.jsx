import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TestiImage1 from "../assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "../assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "../assets/img/testimonials/testimonial-3.webp";
const TestimonialSlider = () => {
  const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      authorName: "Olivia Doe",
      authorPosition: "Head of Design, Google",
    },
    {
      authorImg: TestiImage2,
      authorText:
        "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      authorName: "Olivia Doe",
      authorPosition: "Head of Design, Google",
    },
    {
      authorImg: TestiImage3,
      authorText:
        "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      authorName: "Olivia Doe",
      authorPosition: "Head of Design, Google",
    },
  ];
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide key={index} className="flex flex-col md:flex-row">
              <div className="w-48 h-48 lg:w-[380px]">
                <img src={testimonial.authorImg} alt="/" />
              </div>
              <div className="flex flex-col text-center items-center justify-center mt-2">
                <p className=" italic">{testimonial.authorText}</p>
                <h3 className="text-accent text-lg">
                  {testimonial.authorName}
                </h3>
                <p>{testimonial.authorPosition}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
