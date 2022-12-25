import React, { useState, useEffect } from "react";
import Project1 from "../assets/img/projects/p1.webp";
import Project2 from "../assets/img/projects/p2.webp";
import Project3 from "../assets/img/projects/p3.webp";
import Project4 from "../assets/img/projects/p4.webp";
import Project5 from "../assets/img/projects/p5.webp";
import Project6 from "../assets/img/projects/p6.webp";
import Project from "./Project";

const Projects = () => {
  const projectsNav = [
    {
      name: "all",
    },
    {
      name: "UI/UX Design",
    },
    {
      name: "web development",
    },
    {
      name: "branding",
    },
  ];
  const projectsData = [
    {
      id: "1",
      image: Project1,
      name: "project name 1",
      category: "ui/ux design",
    },
    {
      id: "2",
      image: Project2,
      name: "project name 2",
      category: "web development",
    },
    {
      id: "3",
      image: Project3,
      name: "project name 3",
      category: "ui/ux design",
    },
    {
      id: "4",
      image: Project4,
      name: "project name 4",
      category: "branding",
    },
    {
      id: "5",
      image: Project5,
      name: "project name 5",
      category: "web development",
    },
    {
      id: "6",
      image: Project6,
      name: "project name 6",
      category: "web development",
    },
  ];
  const [item, setitem] = useState({ name: "all" });
  const [active, setActive] = useState(0);
  const [project, setProject] = useState([]);
  useEffect(() => {
    if (item.name === "all") {
      setProject(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProject(filteredProjects);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setitem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <nav className="container mx-auto">
      <ul className="flex flex-col items-center justify-evenly text-white md:flex-row min-h-[100px]">
        {projectsNav.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : "cursor-pointer capitalize"
                }`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8">
        {project.map((item, index) => {
          return <Project project={item} key={index} />;
        })}
      </div>
    </nav>
  );
};

export default Projects;
