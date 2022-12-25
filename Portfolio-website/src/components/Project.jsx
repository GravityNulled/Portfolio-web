import React from "react";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col mt-8 items-center justify-center">
      <img src={project.image} alt={project.name} className="rounded-xl" />
      <p className="text-accent mt-2">{project.category}</p>
      <h2 className="mt-3">{project.name}</h2>
    </div>
  );
};

export default Project;
