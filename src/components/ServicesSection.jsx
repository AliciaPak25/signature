/* import { Link } from "react-router-dom";
import cleaning from "../assets/icono_servicio_1.png";
import maintenance from "../assets/icono_servicio_2.png";
import management from "../assets/icono_servicio_3.png";
import { CirclePlus } from "lucide-react";

const services = [
  {
    id: 1,
    title: (
      <>
        Professional Cleaning <br /> Services
      </>
    ),
    icon: cleaning,
  },
  {
    id: 2,
    title: (
      <>
        Preventive and <br /> Corrective Maintenance
      </>
    ),
    icon: maintenance,
  },
  {
    id: 3,
    title: (
      <>
        Comprehensive Facility <br /> Management
      </>
    ),
    icon: management,
  },
];

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center md:h-screen bg-[#DDDDDD] text-center px-4 pt-10  md:pt-0"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Professionalism, support and trust
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Characterize us in each solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl pb-10 md:pb-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center rounded-xl p-6"
          >
            <div className="w-32 h-32 mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              {service.title}
            </h3>
            <Link to={`/service/${service.id}`}>
              <button className="px-6 py-1 text-white font-medium uppercase w-36 bg-[#94C123] cursor-pointer text-lg hover:bg-[#78991B] transition-all mt-5 flex items-center justify-center">
                View <CirclePlus color="white" className="ml-2" size={16} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
 */

import { Link } from "react-router-dom";
import cleaning from "../assets/icono_servicio_1.png";
import maintenance from "../assets/icono_servicio_2.png";
import management from "../assets/icono_servicio_3.png";
import { CirclePlus } from "lucide-react";

const services = [
  {
    id: 1,
    title: (
      <>
        Professional Cleaning <br /> Services
      </>
    ),
    icon: cleaning,
  },
  {
    id: 2,
    title: (
      <>
        Preventive and <br /> Corrective Maintenance
      </>
    ),
    icon: maintenance,
  },
  {
    id: 3,
    title: (
      <>
        Comprehensive Facility <br /> Management
      </>
    ),
    icon: management,
  },
];

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center 
                 md:h-screen bg-[#DDDDDD] text-center 
                 px-4 pt-10 md:pt-0"
    >
      {/* Increase title size */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Professionalism, support and trust
      </h2>

      {/* Increase paragraph text size */}
      <p className="text-xl text-gray-600 mb-12">
        Characterize us in each solution.
      </p>

      {/* Increase the gap to separate each service box more */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl pb-10 md:pb-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center rounded-xl p-6"
          >
            {/* Enlarge icon container */}
            <div className="w-40 h-40 mb-6">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Increase service title size */}
            <h3 className="text-2xl font-medium text-gray-800 mb-4 text-center">
              {service.title}
            </h3>

            <Link to={`/service/${service.id}`}>
              {/* Slightly bigger button text */}
              <button
                className="px-6 py-2 text-white font-medium uppercase w-40 bg-[#94C123] 
                                 text-lg hover:bg-[#78991B] transition-all mt-5 
                                 flex items-center justify-center cursor-pointer"
              >
                View <CirclePlus color="white" className="ml-2" size={18} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
