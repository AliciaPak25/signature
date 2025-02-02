import logo from "../assets/logo_signature_menu_principal.png";

const Logo = () => {
  return (
    <div className="md:ml-14 flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
      <a className="block xl:mr-8" href="/#home">
        <img
          src={logo}
          className="w-32 h-auto sm:w-44 md:w-52 lg:w-64 xl:w-[258px]"
          alt="Signature"
        />
      </a>
    </div>
  );
};

export default Logo;
