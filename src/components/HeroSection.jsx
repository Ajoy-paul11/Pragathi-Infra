import React from "react";

function HeroSection() {
  return (
    <header>
      <section className="relative h-[90vh] min-h-[600px]">
        <img
          src={
            "https://ik.imagekit.io/ajoy/hero-image-pragathi?updatedAt=1744898791054"
          }
          className="hidden md:block w-full h-full"
          alt="background-image"
        />
        <img
          src={
            "https://ik.imagekit.io/ajoy/mobile-logo.jpg?updatedAt=1744987421815"
          }
          className="md:hidden w-full h-full"
          alt="background-image"
        />
        <div className=" absolute inset-0 flex items-center justify-center lg:top-[-300px] bottom-[-430px] lg:bottom-[0px]">
          <div className=" backdrop-blur-md bg-white/20 py-3 px-1.5 lg:p-8 rounded-xl shadow-lg max-w-[50rem]">
            <h1 className=" text-2xl md:text-4xl xl:text-6xl font-bold text-white mb-4 ">
              Investing in Infrastructure,
              <br /> Cultivating Growth.
            </h1>
          </div>
          {/* <p className="text-xl md:text-2xl text-white/90 mb-8">Secure your future with our high-value real estate options</p> */}
        </div>
      </section>
    </header>
  );
}

export default HeroSection;
