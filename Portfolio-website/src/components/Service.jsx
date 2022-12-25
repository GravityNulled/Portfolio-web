import React from "react";

const Service = ({ service }) => {
  return (
    <div className="flex flex-col bg-secondary rounded-xl">
      <p className="text-accent ml-4 mt-4 mb-24">{service.icon}</p>
      <h3 className="text-2xl ml-4">{service.name}</h3>
      <p className="ml-4 mb-8">{service.description}</p>
    </div>
  );
};

export default Service;
