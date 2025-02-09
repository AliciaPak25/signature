const HeroSection = () => {
  return (
    <div className="relative h-screen hero-background" id="home">
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 m text-white mt-5 ml-2 sm:ml-5 md:ml-20 lg:ml-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Transforming Spaces, <br /> Simplifying Lives:
        </h1>
        <p className="text-2xl md:text-3xl mb-10">
          Discover Our Comprehensive Services.
        </p>

        <a
          href="/#contact"
          className="bg-[#94C123] cursor-pointer uppercase text-center text-white px-11 py-1 text-lg md:text-xl font-semibold hover:bg-[#78991B] transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
