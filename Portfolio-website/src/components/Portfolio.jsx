import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  
  return (
    <section className="bg-primary min-h-[1000px] section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="setion-title">My Latest Work</h2>
          <p className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            officia voluptatibus provident laudantium soluta quaerat.
          </p>
        </div>
        <Projects/>
      </div>
    </section>
  );
};

export default Portfolio;
