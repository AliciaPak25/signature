/* // src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
       
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="flex items-center">
            <div className="w-16 h-16 border-2 border-green-500 flex justify-center items-center">
              <span className="text-green-500 text-2xl font-bold">SIG</span>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contact us</h3>
          <ul className="space-y-1">
            <li>
              <span className="text-green-500 mr-2">📍</span> Offices: 2375
              Pennsylvania Ave NW, Washington DC 20037, United States.
            </li>
            <li>
              <span className="text-green-500 mr-2">📞</span> Phone:
              +1 202-728-2340
            </li>
            <li>
              <span className="text-green-500 mr-2">📧</span> Email:
              signature@gmail.com
            </li>
          </ul>
        </div>

     
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Follow us on the networks</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-green-500 hover:text-green-400 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.4.403a4.92 4.92 0 011.63.948 4.92 4.92 0 01.948 1.63c.163.43.349 1.23.403 2.4.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.4a4.92 4.92 0 01-.948 1.63 4.92 4.92 0 01-1.63.948c-.43.163-1.23.349-2.4.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.4-.403a4.92 4.92 0 01-1.63-.948 4.92 4.92 0 01-.948-1.63c-.163-.43-.349-1.23-.403-2.4-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.4a4.92 4.92 0 01.948-1.63 4.92 4.92 0 011.63-.948c.43-.163 1.23-.349 2.4-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.258 0-3.667.013-4.947.072-1.276.059-2.155.266-2.912.567a6.568 6.568 0 00-2.373 1.528A6.568 6.568 0 00.636 4.14c-.301.757-.508 1.636-.567 2.912-.059 1.28-.072 1.689-.072 4.947s.013 3.667.072 4.947c.059 1.276.266 2.155.567 2.912a6.568 6.568 0 001.528 2.373 6.568 6.568 0 002.373 1.528c.757.301 1.636.508 2.912.567 1.28.059 1.689.072 4.947.072s3.667-.013 4.947-.072c1.276-.059 2.155-.266 2.912-.567a6.568 6.568 0 002.373-1.528 6.568 6.568 0 001.528-2.373c.301-.757.508-1.636.567-2.912.059-1.28.072-1.689.072-4.947s-.013-3.667-.072-4.947c-.059-1.276-.266-2.155-.567-2.912a6.568 6.568 0 00-1.528-2.373 6.568 6.568 0 00-2.373-1.528c-.757-.301-1.636-.508-2.912-.567-1.28-.059-1.689-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-green-500 hover:text-green-400 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.514-4.486-10-10-10S2 6.486 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.24.195 2.24.195v2.477h-1.262c-1.242 0-1.631.771-1.631 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; */

import logoFooter from "../assets/isologo_pie_de_pagina-16.png";
import emailIcon from "../assets/icono-email.png";
import facebookIcon from "../assets/icono-facebook.png";
import instagramIcon from "../assets/icono-instagram.png";
import phoneIcon from "../assets/icono-telefono.png";
import locationIcon from "../assets/icono-ubicacion.png";
import tiktokIcon from "../assets/tiktok.svg";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-center items-center">
          <img src={logoFooter} alt="SIG Logo" className="w-24 h-24" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4 md:ml-41 text-center md:text-start w-full">
            Contact us
          </h3>

          <ul className="space-y-2">
            <li className="flex items-center justify-center md:items-center md:justify-start">
              <img
                src={locationIcon}
                alt="location-icon"
                className="h-6 w-4 mr-3"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=322+S+Kyle+Dr+Waukegan+Illinois+60085"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-sm"
              >
                <span className="font-bold">Offices:</span> 322 S. Kyle Dr.
                Waukegan Illinois 60085
              </a>
            </li>
            <li className="flex items-center justify-center md:items-center md:justify-start">
              <img src={phoneIcon} alt="phone-icon" className="h-4 w-4 mr-3" />
              <a
                href="tel:+12027282340"
                className="hover:text-gray-300 text-sm"
              >
                <span className="font-bold">Phone:</span> +1 (224) 280-1814
              </a>
            </li>
            <li className="flex items-center justify-center md:items-center md:justify-start">
              <img src={emailIcon} alt="email-icon" className="h-4 w-4 mr-3" />
              <a
                href="mailto:signature@gmail.com"
                className="hover:text-gray-300 text-sm"
              >
                <span className="font-bold">Email:</span>{" "}
                signature.contact322@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Follow us on our social media
          </h3>
          <div className="flex justify-center md:justify-center space-x-4">
            <a
              href="https://www.instagram.com/signature.integral.solution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571706132846"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@signature.solution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={tiktokIcon} alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
