import React from "react";
import { Link } from "react-scroll";
import Socials from "./Socials";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
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
    <nav className="relative">
      <BiMenuAltRight
        onClick={() => setOpen(true)}
        size={20}
        className="cursor-pointer"
      />
      <AiOutlineClose
        onClick={() => setOpen(false)}
        size={20}
        className={`${
          open ? `block` : `hidden`
        } absolute top-0 right-0 cursor-pointer z-10`}
      />
      <div className="absolute">
        <ul
          className={`${
            open ? `right-0` : `right-full`
          } flex flex-col fixed items-center justify-center bg-accent gap-8 w-full h-[100vh] top-0 bottom-0 `}
        >
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
      </div>
    </nav>
  );
};

export default NavMobile;
