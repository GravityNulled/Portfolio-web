import React from "react";
import Logo from "../assets/img/logo.svg";

import { FiYoutube, FiInstagram, FiGithub, FiDribbble } from "react-icons/fi";

const Footer = () => {
  const social = [
    {
      icon: <FiYoutube />,
      href: "",
    },
    {
      icon: <FiInstagram />,
      href: "",
    },
    {
      icon: <FiGithub />,
      href: "",
    },
    {
      icon: <FiDribbble />,
      href: "",
    },
  ];
  return (
    <footer className="section bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            {social.map((item, index) => {
              return <p className="text-accent cursor-pointer">{item.icon}</p>;
            })}
          </div>
          <a href="#">
            <img src={Logo} className="max-w-[100px]" alt="Logo" />
          </a>
          <p>&copy; 2022 Omar Ngenge. All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
