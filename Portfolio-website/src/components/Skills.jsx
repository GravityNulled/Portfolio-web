import React from "react";
import SkillImg1 from "../assets/img/skills/html5.png";
import SkillImg2 from "../assets/img/skills/css3.png";
import SkillImg3 from "../assets/img/skills/js.png";
import SkillImg4 from "../assets/img/skills/reactjs.png";
import SkillImg5 from "../assets/img/skills/nextjs.png";
import SkillImg6 from "../assets/img/skills/nodejs.png";
import SkillImg7 from "../assets/img/skills/git.png";
import SkillImg8 from "../assets/img/skills/figma.png";

const Skills = () => {
  const skills = [
    {
      image: SkillImg1,
      name: "html-5",
    },
    {
      image: SkillImg2,
      name: "css-3",
    },
    {
      image: SkillImg3,
      name: "javascript",
    },
    {
      image: SkillImg4,
      name: "react-js",
    },
    {
      image: SkillImg5,
      name: "next-js",
    },
    {
      image: SkillImg6,
      name: "node-js",
    },
    {
      image: SkillImg7,
      name: "git",
    },
    {
      image: SkillImg8,
      name: "figma",
    },
  ];
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto min-h-[80px] flex justify-evenly items-center">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((item, index) => {
            return <img key={index} src={item.image} alt={item.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
