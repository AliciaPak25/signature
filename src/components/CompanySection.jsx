import company from "../assets/modulo_3.png";
import logoSignature from "../assets/logo_signature_modulo_3-12.png";

const CompanySection = () => {
  return (
    <section
      id="company"
      className="md:h-screen h-fit flex flex-col lg:flex-row items-center justify-center bg-[#F0F0F0] px-6 pt-10 pb-10 md:pt-0 md:pb-0"
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end h-auto lg:h-[70vh] p-6 sm:w-[60%] md:w-[75%] md:h-[60vh]">
        <img
          src={company}
          alt="Team Image with White Overlay"
          title="Team"
          className="max-h-full w-full lg:w-[90%] h-auto object-cover lg:object-contain"
        />
      </div>

      <div className="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col items-center lg:items-start text-center lg:text-left  justify-center space-y-6">
        <div className="w-full flex mb-12 justify-end">
          <img
            src={logoSignature}
            alt="Signature Integral Solution Inc."
            title="Signature Integral Solution Inc."
            className="w-36 md:w-48 lg:w-64 mx-auto lg:mx-0"
          />
        </div>

        <p className="text-[#575756] font-light text-lg lg:text-xl xl:text-2xl leading-relaxed text-justify">
          We are dedicated to simplifying your life by offering you a wide range
          of cleaning, maintenance, and business solutions. With our
          professional and committed approach, we strive to exceed your
          expectations on every project. Discover how we can help you make your
          space shine and bring peace of mind to your life.
        </p>

        <p className="font-medium text-[#575756] text-lg lg:text-xl xl:text-2xl mt-2">
          Explore our services now!
        </p>

        <div className="mt-8">
          <a
            href="/#contact"
            className="text-white px-5 py-1 bg-[#94C123] cursor-pointer uppercase text-xl font-semibold hover:bg-[#78991B] transition-all"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
