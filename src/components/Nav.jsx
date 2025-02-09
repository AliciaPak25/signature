/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import whatsappIcon from "../assets/logo_whatsapp_menu_principal.png";
import { enablePageScroll } from "@fluejs/noscroll";
import { Menu, X } from "lucide-react";

const NavLinks = ({
  openNavigation,
  setOpenNavigation,
  activeItem,
  setActiveItem,
  disableActive,
}) => {
  const handleClick = (hash) => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
    setActiveItem(hash);
  };

  const links = [
    { label: "Home", hash: "/#home" },
    { label: "Services", hash: "/#services" },
    { label: "Company", hash: "/#company" },
    { label: "Contact", hash: "/#contact" },
  ];

  return (
    <>
      {links.map(({ label, hash }) => (
        <a
          key={hash}
          href={hash}
          onClick={() => handleClick(hash)}
          className={`block text-white uppercase text-base py-2 md:py-0 w-20 text-center navlinks
            hover:border-b-8 border-b-8 ${
              !disableActive && activeItem === hash
                ? "border-b-[#89B721]"
                : "border-b-transparent"
            } hover:border-b-[#89B721]`}
        >
          {label}
        </a>
      ))}
      <div className="hidden lg:flex items-center justify-center">
        <a
          href="https://wa.me/12242801814?text=Hello%2C%20I%27m%20interested%20in%20knowing%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b-8 border-b-transparent -ml-12 hover:animate-bounce"
        >
          <img src={whatsappIcon} width={25} height={25} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
};

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");
  const location = useLocation();

  // Check if we are on a service detail page
  const disableActive = location.pathname.startsWith("/service/");

  useEffect(() => {
    if (disableActive) {
      setActiveItem(null); // Reset active item when on service detail
    }
  }, [disableActive, location]);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <>
      <nav className="top-[5rem] left-0 right-0 bottom-0 lg:max-auto w-1/3 justify-end border-t-8 border-t-transparent lg:mr-14 flex">
        <div className="w-full justify-between z-2 items-center m-auto lg:flex hidden">
          <NavLinks
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="lg:hidden z-50">
          <button onClick={toggleNavigation}>
            {openNavigation ? (
              <X
                color="white"
                size={40}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 md:mr-16"
              />
            ) : (
              <Menu
                color="white"
                size={40}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 md:mr-16"
              />
            )}
          </button>
        </div>
      </nav>
      {openNavigation && (
        <div className="flex absolute basis-full flex-col items-center w-full h-screen bg-[#333333]/90 backdrop-blur-sm top-0 left-0 justify-center">
          <NavLinks
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      )}
    </>
  );
};

export default Nav;
