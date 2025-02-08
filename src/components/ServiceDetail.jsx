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

/* import { useEffect } from "react";
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
  const { id } = useParams();
  const service = serviceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  return (
    <div className="bg-[#DDDDDD] min-h-screen py-8 md:py-16 px-4 flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:space-x-16">
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0 flex flex-col justify-center lg:items-start">
          <a
            href="/#services"
            className="mb-10 text-gray-600 hover:text-gray-800 transition text-base md:text-lg flex items-center"
          >
            <img
              src={returnButton}
              alt="return-button"
              width={30}
              height={30}
            />
            <p className="ml-3 uppercase">Return</p>
          </a>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            {service.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 text-center lg:text-left">
            {service.description}
          </p>

          <a
            href="/#contact"
            className="mt-2 px-8 py-3 font-semibold text-white uppercase 
                       transition text-lg md:text-xl bg-[#94C123] 
                       hover:bg-[#78991B]"
          >
            Contact Us
          </a>
        </div>

        <div className="w-full lg:w-3/5 flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-xl h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; */

// Version 3

/* import { useEffect } from "react";
import { useParams } from "react-router-dom";
import servicio1 from "../assets/servicio1.jpg";
import servicio2 from "../assets/servicio2.jpg";
import servicio3 from "../assets/servicio3.jpg";
import returnButton from "../assets/boton-return-servicios.png";

const serviceData = {
  1: {
    title: `Professional Services:`,
    description: `
      We offer high-quality, specialized cleaning for a variety of environments,
      including offices, residences, commercial premises, and public spaces.
    `,
    image: servicio1,
  },
  2: {
    title: "Preventive and Corrective Maintenance:",
    description: `
      We provide regular maintenance services to prevent problems and ensure<br />
      the optimal functioning of facilities, equipment, and systems. We also<br />
      carry out quick repairs and solutions to resolve unforeseen problems.
    `,
    image: servicio2,
  },
  3: {
    title: "Comprehensive Facility Management:",
    description: `
      We offer comprehensive solutions for the management and maintenance<br />
      of facilities, covering aspects such as electricity, plumbing, air conditioning,<br />
      and security systems.
    `,
    image: servicio3,
  },
};

const ServiceDetail = () => {
  const { id } = useParams();

  const service = serviceData[id];

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#DDDDDD] min-h-screen px-6 md:px-16 py-8">
      <div className="md:w-1/3 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
        <a
          href="/#services"
          className="mb-8 text-gray-600 hover:text-gray-800 transition text-sm md:text-base flex items-center"
        >
          <img src={returnButton} alt="Return" width={30} height={30} />
          <p className="ml-3 uppercase text-base">Return</p>
        </a>
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          dangerouslySetInnerHTML={{ __html: service.title }}
        ></h2>
        <p
          className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: service.description }}
        ></p>
        <a
          href="/#contact"
          className="px-8 py-1 font-semibold text-white uppercase bg-[#94C123] hover:bg-[#78991B] transition text-lg"
        >
          Contact Us
        </a>
      </div>

      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-full max-w-lg lg:max-w-2xl h-auto object-cover shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServiceDetail;
 */

// Version 4

/* import { useEffect } from "react";
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
  const { id } = useParams();
  const service = serviceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  return (
    <div className="bg-[#DDDDDD] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 lg:px-20 gap-10">
 
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 w-full">
          <a
            href="/#services"
            className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-800 transition text-base"
          >
            <img
              src={returnButton}
              alt="return-button"
              width={30}
              height={30}
            />
            <span className="ml-3 uppercase">Return</span>
          </a>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            {service.title}
          </h2>

       
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-center lg:text-left max-w-2xl">
            {service.description}
          </p>

          <a
            href="/#contact"
            className="px-8 py-3 font-semibold text-white uppercase transition bg-[#94C123] hover:bg-[#78991B] text-lg rounded-md"
          >
            Contact Us
          </a>
        </div>


        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-xl h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; */
