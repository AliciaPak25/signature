/* // src/components/CompanySection.jsx
import company from "../assets/modulo_3.png";
import logoSignature from "../assets/logo_signature_modulo_3-12.png";

const CompanySection = () => {
  return (
    <section
      id="company"
      className="h-screen flex items-center justify-center bg-[#F0F0F0]"
    >
      <div className="flex-1 flex items-center justify-center h-3/4 -mr-35">
        <img
          src={company} // Replace with your image path
          alt="Team Image with White Overlay"
          className="h-3/4 w-xs object-cover"
        />
      </div>

      <div className="flex-1 p-6 lg:p-12 flex flex-col justify-end pr-4 space-y-4 relative">
        <div className="flex justify-end">
          <img
            src={logoSignature} // Replace with your logo path
            alt="Signature Integral Solution Inc"
            className="w-36 lg:w-48"
          />
        </div>

        <p className="text-gray-700 text-lg mt-4 text-justify leading-relaxed">
          We are dedicated to simplifying your life by offering you a wide range
          of cleaning, maintenance, and business solutions. With our
          professional and committed approach, we strive to exceed your
          expectations on every project. Discover how we can help you make your
          space shine and bring peace of mind to your life.
        </p>

        <p className="font-semibold text-gray-900 text-lg">
          Explore our services now!
        </p>

        <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition w-40">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default CompanySection;
 */

// src/components/CompanySection.jsx
import company from "../assets/modulo_3.png";
import logoSignature from "../assets/logo_signature_modulo_3-12.png";

const CompanySection = () => {
  return (
    <section
      id="company"
      className="md:h-screen h-fit flex flex-col-reverse lg:flex-row items-center justify-center bg-[#F0F0F0]"
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end md:h-3/4 lg:h-9/10 p-4 pr-15">
        <img
          src={company}
          alt="Team Image with White Overlay"
          className="md:h-80 w-auto md:ml-10 lg:h-3/4 lg:w-auto h-64 object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col items-center lg:items-start justify-center lg:justify-center space-y-4 relative lg:mt-0 mt-16">
        {/* Logo */}
        <div className="flex justify-center lg:justify-end mb-4 w-5/6">
          <img
            src={logoSignature}
            alt="Signature Integral Solution Inc"
            className="w-24 sm:w-36 lg:w-48"
          />
        </div>

        {/* Paragraph */}
        <p className="text-gray-700 text-base sm:text-lg mt-4 text-center lg:text-justify leading-relaxed w-5/6">
          We are dedicated to simplifying your life by offering you a wide range
          of cleaning, maintenance, and business solutions. With our
          professional and committed approach, we strive to exceed your
          expectations on every project. Discover how we can help you make your
          space shine and bring peace of mind to your life.
        </p>

        <p className="font-semibold text-gray-900 text-base sm:text-lg text-center lg:text-left mt-4">
          Explore our services now!
        </p>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <a
            href="/#contact"
            className="text-white px-6 py-1 w-40 mt-8 bg-[#94C123] cursor-pointer uppercase text-lg font-semibold hover:bg-[#78991B] transition-all text-center"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
