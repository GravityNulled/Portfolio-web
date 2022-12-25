import React from "react";
import FreelancerBrandIcon from "../assets/img/brands/freelancer.png";
import UpworkBrandIcon from "../assets/img/brands/upwork.png";
import FiverBrandIcon from "../assets/img/brands/fiverr.png";
import BehanceBrandIcon from "../assets/img/brands/behance.png";
import DribbbleBrandIcon from "../assets/img/brands/dribbble.png";

const Brands = () => {
  const brands = [
    {
      img: FreelancerBrandIcon,
      href: "",
    },
    {
      img: UpworkBrandIcon,
      href: "",
    },
    {
      img: FiverBrandIcon,
      href: "",
    },
    {
      img: BehanceBrandIcon,
      href: "",
    },
    {
      img: DribbbleBrandIcon,
      href: "",
    },
  ];
  return (
    <section className="bg-tertiary min-h-[100px] section">
      <div className="flex justify-evenly md:justify-around items-center mx-auto container flex-col md:flex-row">
        {brands.map((item, index) => {
          return <img src={item.img} alt="/" key={index} />;
        })}
      </div>
    </section>
  );
};

export default Brands;
