import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";

function Overview() {
  const [isOpen, setIsOpen] = useState(false);

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
    <section id="overview" className="py-10 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className=" w-[180px] h-[40px] mx-auto my-6 cta-bg-color rounded-tl-full rounded-br-full flex justify-center items-center">
          <h2 className=" text-[#444444] text-[calc(1rem+0.9vw)] lg:text-[2rem] font-bold">
            Overview
          </h2>
        </div>
        <div className=" flex flex-col gap-10">
          <div className="space-y-6">
            <p className="text-lg text-[#444444] text-center">
              Immerse yourself in a vibrant kaleidoscope designed to rejuvenate
              your mind, body, and soul through nature's five elements - Earth,
              Sky, Wind, Fire, and Water.
            </p>

            <p className="text-lg text-[#444444] text-center">
              Experience an exceptional lifestyle at Pragati Reality, where
              timeless wisdom meets modern design to uplift your well-being.
              Thoughtfully crafted homes embrace the nurturing essence of the
              elements, offering a harmonious living experience. Built with
              sustainability in mind, Pragathi Infra residences are
              climate-responsive, allowing you to minimize your environmental
              impact while enjoying a serene and eco-friendly lifestyle.
            </p>
          </div>
          <div className=" ">
            <button onClick={() => setIsOpen(true)} className=" mx-auto text-sm text-white hover:text-[#444444] bg-[#FF6F61] hover:bg-[#FFA726] hover:shadow[0px_4px_4px_0px_rgba(0,0,0,0.25)] group p-3 rounded-lg flex items-center justify-center gap-2">
              Know More <FaDownload className=" group-hover:text-black/50"/>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Overview;
