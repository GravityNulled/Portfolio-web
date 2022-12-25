import React from "react";
import TestimonialSlider from "./TestimonialSlider";


const Testimonials = () => {
  
  return (
    <section className="section bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col text-center justify-center items-center">
          <h2 className="section-title">What people say</h2>
          <p className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ea enim fugit veniam nobis sapiente, saepe placeat cumque facere
            dicta.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
