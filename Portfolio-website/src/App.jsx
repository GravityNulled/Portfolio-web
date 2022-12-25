import { useState } from "react";
import About from "./components/About";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      {/* <div className="h-[2000px]"></div> */}
    </div>
  );
}

export default App;
