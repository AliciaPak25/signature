/* import { useState } from "react";
import { Menu, X } from "lucide-react";
import whatsappIcon from "../assets/logo_whatsapp_menu_principal.png";
import { useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "@fluejs/noscroll";
S;

const NavLinks = ({ openNavigation, setOpenNavigation }) => {
  const pathname = useLocation();

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <a
        href="#home"
        onClick={handleClick}
        className={`block text-white uppercase text-base py-2 md:py-0 hover:border-b-8 border-b-8 border-b-transparent hover:border-b-[#89B721] w-14 text-center ${
          pathname.hash === "#home"
            ? "border-b-8 border-b-[#89B721]"
            : "border-b-8 border-b-transparent"
        }}`}
      >
        Home
      </a>
      <a
        href="#services"
        className={`block text-white uppercase text-base py-2 md:py-0 hover:border-b-8 border-b-8 border-b-transparent hover:border-b-[#89B721] w-14 text-center ${
          pathname.hash === "#services"
            ? "border-b-8 border-b-[#89B721]"
            : "border-b-8 border-b-transparent"
        }}`}
      >
        Services
      </a>
      <a
        href="#company"
        className={`block text-white uppercase text-base py-2 md:py-0 hover:border-b-8 border-b-8 border-b-transparent hover:border-b-[#89B721] w-14 text-center ${
          pathname.hash === "#company"
            ? "border-b-8 border-b-[#89B721]"
            : "border-b-8 border-b-transparent"
        }}`}
      >
        Company
      </a>
      <div className="flex items-center justify-center space-x-5">
        <a
          href="#contact"
          className={`block text-white uppercase text-base py-2 md:py-0 hover:border-b-8 border-b-8 border-b-transparent hover:border-b-[#89B721] w-14 text-center ${
            pathname.hash === "#contact"
              ? "border-b-8 border-b-[#89B721]"
              : "border-b-8 border-b-transparent"
          }}`}
        >
          Contact
        </a>
        <a
          href="https://wa.me/2242801814?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20provide%20me%20with%20more%20details%3F%0A" // replace with your number and optional message
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b-8 border-b-transparent"
        >
          <img src={whatsappIcon} width={25} height={25} />
        </a>
      </div>
    </>
  );
};

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <>
      <nav className="hidden top-[5rem] left-0 right-0 bottom-0 lg:flex lg:max-auto w-1/3 justify-end border-t-8 border-t-transparent">
        <div className="flex w-full md:flex justify-between relative z-2 flex-col items-center m-auto lg:flex-row">
          <NavLinks
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavigation} className="bg-white">
            {openNavigation ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {openNavigation && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks
            openNavigation={openNavigation}
            setOpenNavigation={setOpenNavigation}
          />
        </div>
      )}
    </>
  );
};

export default Nav;
 */

import { useState } from "react";
import whatsappIcon from "../assets/logo_whatsapp_menu_principal.png";
import { enablePageScroll, disablePageScroll } from "@fluejs/noscroll";
import { Menu, X } from "lucide-react";

const NavLinks = ({
  openNavigation,
  setOpenNavigation,
  activeItem,
  setActiveItem,
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
              activeItem === hash
                ? "border-b-[#89B721]"
                : "border-b-transparent"
            } hover:border-b-[#89B721]`}
        >
          {label}
        </a>
      ))}
      <div className="hidden lg:flex items-center justify-center space-x-5">
        <a
          href="https://wa.me/2242801814?text=Hello%2C%20I%27m%20interested..."
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b-8 border-b-transparent"
        >
          <img src={whatsappIcon} width={25} height={25} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
};

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeItem, setActiveItem] = useState("#home"); // default active item

  const toggleNavigation = () => {
    /*  if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    } */
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
