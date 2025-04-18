import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

function About() {
  return (
    <section id="about" className=" py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className=" relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7641854/pexels-photo-7641854.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1"
                alt="about-image"
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-1 md:-right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
              <div className="text-4xl font-bold text-[#003366]">10+</div>
              <div className="text-[#555555]">Years of Excellence</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 text-sm font-medium bg-[#FF6F61]/10 text-[#FF6F61] rounded-full mb-4">
              About Pragathi Reality
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#222222] mb-6">
              Setting the Standard in Real Estate Since 2015
            </h2>
            <p className="text-[#555555] mb-6">
              At Pragathi Reality, we believe that finding the perfect property is about more than just square footage and
              location—it's about discovering a place where memories will be made and dreams can flourish. With over 10
              years of experience in the luxury real estate market, our team of dedicated professionals combines
              industry expertise with personalized service to guide you through every step of your real estate journey.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-5 w-5 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-medium text-[#222222]">Unparalleled Expertise</h3>
                  <p className="text-sm text-[#555555]">
                    Our team brings decades of specialized knowledge in luxury real estate markets worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-5 w-5 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-medium text-[#222222]">Exclusive Portfolio</h3>
                  <p className="text-sm text-[#555555]">
                    Access to the most prestigious properties, many available only through our private network
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-5 w-5 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-medium text-[#222222]">Personalized Approach</h3>
                  <p className="text-sm text-[#555555]">
                    Tailored service that considers your unique lifestyle needs and investment goals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="h-5 w-5 text-[#FF6F61] mt-0.5" />
                <div>
                  <h3 className="font-medium text-[#222222]">Global Reach</h3>
                  <p className="text-sm text-[#555555]">
                    International presence with local expertise in the world's most desirable locations
                  </p>
                </div>
              </div>
            </div>

            {/* <button className="bg-[#003366] hover:bg-[#003366]/90 text-white p-3 rounded-lg">Learn More About Us</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
