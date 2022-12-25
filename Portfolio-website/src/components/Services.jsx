import React from "react";
import { FiLayout, FiSettings, FiPenTool, FiTag } from "react-icons/fi";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      icon: <FiLayout />,
      name: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <FiSettings />,
      name: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <FiPenTool />,
      name: "Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <FiTag />,
      name: "SEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
  ];
  return (
    <section className="section bg-tertiary">
      <div className="mx-auto container">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            return <Service service={service} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
