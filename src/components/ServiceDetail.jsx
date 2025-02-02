/* import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import cleaning from "../assets/icono_servicio_1.png";
import maintenance from "../assets/icono_servicio_2.png";
import management from "../assets/icono_servicio_3.png";

const serviceData = {
  1: {
    title: "Professional Cleaning Services",
    description:
      "We offer high-quality, specialized cleaning for a variety of environments, including offices, residences, commercial premises, and public spaces.",
    image: cleaning,
  },
  2: {
    title: "Preventive and Corrective Maintenance",
    description:
      "Ensure the longevity of your facilities with our reliable maintenance solutions for mechanical, electrical, and structural systems.",
    image: maintenance,
  },
  3: {
    title: "Comprehensive Facility Management",
    description:
      "Optimize your facility's operations with our comprehensive management services tailored to your unique needs.",
    image: management,
  },
};

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from the route params
  const navigate = useNavigate();

  const service = serviceData[id];

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F5F5F5] text-center px-4">
      <Link
        to="/"
        className="self-start px-4 py-2 mb-6 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
      >
        ← Return
      </Link>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
      <p className="text-lg text-gray-600 mb-8">{service.description}</p>
      <img
        src={service.image}
        alt={service.title}
        className="w-96 h-64 object-contain rounded-xl shadow-lg"
      />
    </div>
  );
};

export default ServiceDetail; */

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import servicio1 from "../assets/servicio1.jpg";
import servicio2 from "../assets/servicio2.jpg";
import servicio3 from "../assets/servicio3.jpg";
import returnButton from "../assets/boton-return-servicios.png";

const serviceData = {
  1: {
    title: "Professional Cleaning Services:",
    description:
      "We offer high-quality, specialized cleaning for a variety of environments, including offices, residences, commercial premises, and public spaces.",
    image: servicio1,
  },
  2: {
    title: "Preventive and Corrective Maintenance:",
    description:
      "We provide regular maintenance services to prevent problems and ensure the optimal functioning of facilities, equipment and systems. We also carry out quick repairs and solutions to resolve unforeseen problems.",
    image: servicio2,
  },
  3: {
    title: "Comprehensive Facility Management:",
    description:
      "We offer comprehensive solutions for the management and maintenance of facilities, covering aspects such as electricity, plumbing, air conditioning, and security systems.",
    image: servicio3,
  },
};

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from the route params

  const service = serviceData[id];

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component is rendered
  }, []);

  return (
    <div className="flex bg-[#DDDDDD] flex-col lg:flex-row items-center lg:items-center justify-center min-h-screen px-4 md:px-12 lg:px-20 py-8">
      {/* Left Content */}
      <div className="md:w-1/3 w-2/5 mb-8 lg:mb-0 flex flex-col md:items-start items-center">
        <a
          href="/#services"
          className="mb-10 text-gray-600 hover:text-gray-800 transition text-sm md:text-base flex items-center justify-center mb-"
        >
          <img src={returnButton} alt="return-button" width={30} height={30} />{" "}
          <p className="ml-3 uppercase">Return</p>
        </a>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {service.title}
        </h2>
        <p className="text-base md:w-[214px] md:text-lg text-gray-600 mb-8">
          {service.description}
        </p>
        <a
          href="/#contact"
          className="mt-2 px-6 py-1 font-semibold text-white uppercase transition text-base md:text-lg bg-[#94C123] cursor-pointer  hover:bg-[#78991B]"
        >
          Contact Us
        </a>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-full max-w-md lg:max-w-lg h-auto object-cover  shadow-lg"
        />
      </div>
    </div>
  );
};

export default ServiceDetail;
