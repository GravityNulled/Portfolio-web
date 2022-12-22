import React from "react";
import { FiYoutube, FiInstagram, FiGithub, FiDribbble } from "react-icons/fi";
import { Link } from "react-scroll";
const Socials = () => {
  const socials = [
    {
      icon: <FiYoutube />,
      href: "https://www.youtube.com",
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
    <ul className="flex gap-2">
      {socials.map((icon, index) => {
        return (
          <li className="cursor-pointer w-5" key={index}>
            <Link
              to={icon.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {icon.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
