import Logo from "./Logo";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === "/";
  const isServiceDetailPage = location.pathname.startsWith("/service/");
  return (
    <header
      className={`navbar ${
        isHomePage
          ? "bg-transparent navbar absolute"
          : isServiceDetailPage
          ? "header-background"
          : "bg-white"
      } navbar top-0 left-0 flex-wrap z-50 sm:mx-auto flex w-full items-center justify-between p-0 m-0 sm:p-8`}
    >
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
