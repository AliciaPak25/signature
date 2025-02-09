import whiteLogo from "../assets/sig-white.png";
import whatsappIcon from "../assets/whatsapp-contact.png";

const ContactSection = () => {
  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center contact-background"
      id="contact"
    >
      <img
        src={whiteLogo}
        alt="SIG Logo"
        className="absolute top-6 left-10 w-16 h-16 md:w-20 md:h-20 md:left-20"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly w-full max-w-7xl mx-auto px-8">
        <div className="text-center text-white md:text-left mb-20 md:mb-0">
          <p className="text-2xl sm:text-3xl md:text-4xl text-center">
            Do not wait any longer
          </p>
          <p className=" text-2xl sm:text-3xl md:text-4xl mt-2 text-center">
            to resolve your maintenance needs.
          </p>
        </div>

        <div className="bg-[#89B721]/80 flex flex-col justify-center items-center rounded-[40px] text-center p-10 md:p-16 w-[90%] sm:w-[70%] md:w-[500px] h-auto md:h-[450px] lg:h-[550px] sm:py-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact us now
          </h3>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white mt-4 font-normal">
            and let us take care of everything!
          </p>

          <div className="flex flex-col items-center mt-15">
            <a
              href="https://wa.me/12242801814?text=Hello%2C%20I%27m%20interested%20in%20knowing%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-4 hover:animate-bounce"
              />

              <p className="text-lg sm:text-xl md:text-2xl font-light text-white">
                WhatsApp
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
