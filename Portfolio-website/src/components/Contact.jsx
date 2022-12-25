import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const contact = [
    {
      icon: <FiMail />,
      title: "Have a question?",
      subtitle: "I am here to help you.",
      description: "Email me at hello@youremail.com",
    },
    {
      icon: <FiMapPin />,
      title: "Current Location",
      subtitle: "Bucharest, Romania",
      description: "Serving clients worldwide",
    },
  ];
  return (
    <section className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex-flex-col items-center justify-center text-center">
          <h2 className="section-title">Contact Me</h2>
          <p className="pb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            saepe reprehenderit fugit fugiat doloremque ipsam similique, dolorum
            sed! Alias, quas.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-around mb-8">
          {contact.map((contact, index) => {
            return (
              <div key={index} className="flex flex-col mt-5">
                <p className="text-accent mb-10">{contact.icon}</p>
                <p className="text-white">{contact.title}</p>
                <p>{contact.subtitle}</p>
                <p className="text-accent">{contact.description}</p>
              </div>
            );
          })}
          <form className="w-full space-y-8 max-w-[780px]">
            <div className="flex gap-8">
              <input type="text" placeholder="Your Name" className="input" />
              <input type="text" placeholder="Your Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea
              placeholder="Your Message"
              className="input"
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
