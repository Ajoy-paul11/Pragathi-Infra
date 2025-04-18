import React from "react";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import MasterPlan from "./Masterplan";
import About from "./About";
import Amenities from "./Amenities";
import Location from "./Location";
import Contact from "./Contact";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonText = "ENQUIRE NOW";
  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/60">
          <div className=" relative  mx-auto">
            <div className=" relative rounded-lg shadow-xl bg-[#FF6F61] p-4 ">
              <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer cta-bg-color  hover:bg-gray-300 rounded-full">
                <RxCross2
                  className=" primary-text-color h-5 w-5 duration-200 bg-blue-200 rounded-full "
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className=" w-[360px]">
                <Form />
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={` block  fixed right-0 top-[40%] bg-[#FF6F61] text-white z-50 px-2 py-2 rounded-l-md shadow-[0_0_10px_rgba(0,0,0,0.25)] shadow-[#234297] transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col items-center">
          {buttonText.split("\n").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <span
                  key={`${wordIndex}-${charIndex}`}
                  className="text-xs lg:text-sm font-semibold"
                >
                  {char}
                </span>
              ))}
              {wordIndex === 0 && <div className="h-1 lg:h-2" />}{" "}
              {/* Add space between words */}
            </React.Fragment>
          ))}
        </div>
      </button>
      <HeroSection />
      <Overview />
      <MasterPlan />
      <About />
      <Amenities />
      {/* <Location /> */}
      <Contact />
    </>
  );
}

export default Home;
