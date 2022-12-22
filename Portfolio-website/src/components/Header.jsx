import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? `bg-tertiary h-20` : `h-24`
      } flex items-center w-full z-50 fixed top-0 transition-all duration-300 text-white`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 ">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="Logo" className="w-[100px]" />
        </a>
        {/* Nav */}
        <div className="hidden sm:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden sm:block">
          <Socials />
        </div>
        {/* Mobile Nav */}
        <div className="sm:hidden block">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
