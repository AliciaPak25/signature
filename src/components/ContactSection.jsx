// src/components/ContactSection.jsx

/* import React from "react";

const ContactSection = () => {
  return (
    <div
      className="relative h-screen flex justify-center items-center contact-background"
      id="contact"
    >
 
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-6xl px-6">
      
        <div className="text-center md:text-left text-white md:w-1/2 mb-10 md:mb-0">
          <p className="text-2xl md:text-3xl font-semibold">
            Don't wait any longer
          </p>
          <p className="text-xl md:text-2xl font-light mt-2">
            to resolve your maintenance needs.
          </p>
        </div>

       
        <div className="bg-[#89B721] flex flex-col rounded-2xl text-center p-8 md:p-12 md:w-xl h-96 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Contact us now
          </h3>
          <p className="text-lg md:text-xl text-white mt-2">
            and let us take care of everything!
          </p>

          <div className="flex flex-col items-center mt-6">
            <img
              src="/path-to-whatsapp-icon.png"
              alt="WhatsApp"
              className="w-12 h-12 mb-2"
            />
            <p className="text-lg font-medium text-white">WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; */

import whiteLogo from "../assets/sig-white.png";
import whatsappIcon from "../assets/whatsapp-contact.png";

const ContactSection = () => {
  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center  contact-background"
      id="contact"
    >
      {/* SIG Logo */}
      <img
        src={whiteLogo}
        alt="SIG Logo"
        className="absolute top-6 left-6 w-12 h-12 md:w-16 md:h-16 ml-20 mt-6"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly w-full max-w-5xl mx-auto px-6">
        {/* Left Side Text */}
        <div className="text-center text-white mr-10">
          <p className="text-xl md:text-4xl font-semibold">
            Do not wait any longer
          </p>
          <p className="text-xl md:text-4xl font-semibold mt-2">
            to resolve your maintenance needs.
          </p>
        </div>

        {/* Right Side Contact Box */}
        <div className="bg-[#89B721]/60 flex flex-col justify-center items-center rounded-2xl text-center p-8 md:p-12 w-xs sm:w-sm md:w-[350px] h-96 shadow-lg md:mt-0 mt-16 ml-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Contact us now
          </h3>
          <p className="text-lg md:text-xl text-white mt-2">
            and let us take care of everything!
          </p>
          {/* WhatsApp Button */}
          <div className="flex flex-col items-center mt-10">
            <a
              href="https://wa.me/12242801814?text=Hello%2C%20I%27m%20interested%20in%20knowing%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b-8 border-b-transparent"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-14 h-14 mb-2"
              />
            </a>
            <p className="text-lg font-medium text-white">WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
