import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";


function Masterplan() {
    const [isMapZoomed, setIsMapZoomed] = useState(false);

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
    <section id="master plan" className=" py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className=" inline-block px-3 py-1 text-sm font-medium bg-[#003366]/10 text-[#003366] rounded-full mb-4">
            Development Plan
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#222222] mb-4">
            Interactive Masterplan
          </h2>
          <p className="text-[#555555] max-w-2xl">
            Explore our current and upcoming development projects in this
            interactive masterplan
          </p>
        </motion.div>
        <div className=" bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className=" relative w-full h-[500px] md:h-[600px] overflow-hidden">
            <div
              className={` relative w-full h-full transition-transform duration-500 ${
                isMapZoomed ? " scale-150" : "scale-100"
              }`}
            >
              <img
                className=" object-cover h-full w-full"
                src="https://images.pexels.com/photos/11768988/pexels-photo-11768988.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=1"
                alt="plot-plan"
              />
            </div>
            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                <button
                className="bg-white hover:bg-gray-100 h-10 w-10 rounded-full"
                onClick={() => setIsMapZoomed(!isMapZoomed)}>
                    {isMapZoomed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mx-auto"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mx-auto"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                )}
                  <span className="sr-only">{isMapZoomed ? "Zoom Out" : "Zoom In"}</span>
                </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={() => setIsOpen(true)} className="bg-[#003366] hover:bg-[#003366]/90 text-white p-3 rounded-lg">Download Full Masterplan</button>
        </div>
      </div>
    </section>
    </>
  );
}

export default Masterplan;
