import React from "react";

// import { navigation } from "../data";
import { Link } from "react-scroll";
const Nav = () => {
  const navigation = [
    {
      name: "home",
      href: "home",
    },
    {
      name: "about",
      href: "about",
    },
    {
      name: "portfolio",
      href: "portfolio",
    },
    {
      name: "services",
      href: "services",
    },
    {
      name: "testimonials",
      href: "testimonials",
    },
    {
      name: "contact",
      href: "contact",
    },
  ];
  return (
    <nav>
      <ul className="flex space-x-5 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className=" hover:text-accent-hover cursor-pointer transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
