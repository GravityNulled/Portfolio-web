import React from "react";
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section className="bg-secondary section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md: gap-4 lg:gap-10">
          <img
            src={Image}
            alt="/"
            className="object-cover rounded-2xl h-full w-[500px] mb-3"
          />
          <div className="flex flex-col justify-center items-center">
            <h2>Jane Wilson</h2>
            <p className="text-accent mt-3 text-center">
              FreeLance Software Developer
            </p>
            <p className="text-center pt-4  lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quo et expedita placeat aut!
            </p>
            <button className="btn bg-accent mt-8 md:btn-md lg:btn-lg">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
