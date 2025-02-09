import logoFooter from "../assets/isologo_pie_de_pagina-16.png";
import emailIcon from "../assets/icono-email.png";
import facebookIcon from "../assets/icono-facebook.png";
import instagramIcon from "../assets/icono-instagram.png";
import phoneIcon from "../assets/icono-telefono.png";
import locationIcon from "../assets/icono-ubicacion.png";
import tiktokIcon from "../assets/tiktok.svg";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-center items-center">
          <img src={logoFooter} alt="SIG Logo" className="w-32 h-32" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 md:mb-4 w-full md:pl-8 text-white">
            Contact us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-start">
              <img
                src={locationIcon}
                alt="location-icon"
                className="h-6 w-4 mr-4"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=322+S+Kyle+Dr+Waukegan+Illinois+60085"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-base sm:text-lg font-light md:text-xl text-white"
              >
                <span className="font-medium">Offices:</span> 322 S. Kyle Dr.
                Waukegan Illinois 60085
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <img src={phoneIcon} alt="phone-icon" className="h-4 w-4 mr-4" />
              <a
                href="tel:+12027282340"
                className="hover:text-gray-300 sm:text-lg md:text-xl font-light text-white text-base"
              >
                <span className="font-medium">Phone:</span> +1 (224) 280-1814
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <img src={emailIcon} alt="email-icon" className="h-4 w-5 mr-4" />
              <a
                href="mailto:signature@gmail.com"
                className="hover:text-gray-300 sm:text-lg font-light md:text-xl text-white text-base"
              >
                <span className="font-medium">Email:</span>{" "}
                signature.contact322@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-center">
            Follow us on our social media
          </h3>
          <div className="flex justify-center space-x-6 md:mb-20">
            <a
              href="https://www.instagram.com/signature.integral.solution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571706132846"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com/@signature.solution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
