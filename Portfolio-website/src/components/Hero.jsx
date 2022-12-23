import React from "react";
import woman from "../assets/img/banner-woman2.webp";
const Hero = () => {
  return (
    <section className="flex items-center bg-primary lg:h-[85vh] lg:bg-center lg:bg-no-repeat py-32 lg:p-0 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {/*  Left*/}
          <div className="flex flex-col p-8 items-center text-center justify-center ">
            <h1 className="text-lg text-accent mb-8">Hi, I am Jane</h1>
            <p className="text-4xl leading-[40px]">I build & Design Software</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              asperiores pariatur aliquams
            </p>
            <button className="bg-accent btn mt-4">Work With Me</button>
          </div>
          {/* Right */}
          <div className="hidden md:block">
            <img
              src={woman}
              alt="banner"
              className="overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
