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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component is rendered
  }, []);

  const service = serviceData[id];

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#DDDDDD] min-h-screen px-4 md:px-8 lg:px-20 py-8">
      {/* Left Section */}
      <div className="lg:w-1/3 w-full mb-8 lg:mb-0 text-center lg:text-left flex flex-col items-center lg:items-start lg:mr-24">
        <a
          href="/#services"
          className="lg:mb-16 mb-8 text-[#575756] hover:text-[#3E3E3E] transition text-sm md:text-base flex items-center justify-center "
        >
          <img src={returnButton} alt="return-button" width={35} height={35} />
          <p className="ml-3 uppercase">Return</p>
        </a>
        <h2 className="text-3xl md:text-4xl font-bold text-[#575756] mb-6 lg:max-w-md">
          {service.title}
        </h2>
        <p className="text-xl md:text-2xl text-[#575756] mb-8 md:w-[90%] lg:w-[65%] max-w-xl">
          {service.description}
        </p>
        <a
          href="/#contact"
          className="lg:mt-8 px-6 py-1 font-semibold text-white uppercase bg-[#94C123] hover:bg-[#78991B] transition text-xl "
        >
          Contact Us
        </a>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/5 w-full flex justify-center items-center">
        <img
          src={service.image}
          alt={service.title}
          title={service.title}
          className="w-full max-w-lg lg:max-w-xl h-auto object-cover shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServiceDetail;
