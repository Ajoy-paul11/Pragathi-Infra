import { useState } from "react";
import { motion } from "framer-motion";
import { LuMapPin as MapPin } from "react-icons/lu";
import { LiaCarSideSolid as Car } from "react-icons/lia";
import { MdOutlineTrain as Train } from "react-icons/md";
import { LuPlane as Plane } from "react-icons/lu";
import { LuShoppingBag as ShoppingBag } from "react-icons/lu";
import { LuUtensilsCrossed as UtensilsCrossed } from "react-icons/lu";
import { LuSchool as School } from "react-icons/lu";

const locationCategories = [
  {
    id: "overview",
    name: "Overview",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: <Car className="h-5 w-5" />,
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    id: "education",
    name: "Education",
    icon: <School className="h-5 w-5" />,
  },
];

const locationPoints = {
  transportation: [
    {
      name: "International Airport",
      distance: "25 min drive",
      icon: <Plane className="h-5 w-5 text-[#FF6F61]" />,
    },
    {
      name: "Downtown Metro Station",
      distance: "10 min walk",
      icon: <Train className="h-5 w-5 text-[#FF6F61]" />,
    },
    {
      name: "Highway Access",
      distance: "5 min drive",
      icon: <Car className="h-5 w-5 text-[#FF6F61]" />,
    },
  ],
  lifestyle: [
    {
      name: "Luxury Shopping District",
      distance: "15 min walk",
      icon: <ShoppingBag className="h-5 w-5 text-[#FF6F61]" />,
    },
    {
      name: "Fine Dining Restaurants",
      distance: "5 min walk",
      icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    },
    {
      name: "Cultural Arts Center",
      distance: "10 min drive",
      icon: <ShoppingBag className="h-5 w-5 text-[#FF6F61]" />,
    },
  ],
  education: [
    {
      name: "International School",
      distance: "10 min drive",
      icon: <School className="h-5 w-5 text-[#FF6F61]" />,
    },
    {
      name: "Private Academy",
      distance: "15 min drive",
      icon: <School className="h-5 w-5 text-[#FF6F61]" />,
    },
    {
      name: "University Campus",
      distance: "20 min drive",
      icon: <School className="h-5 w-5 text-[#FF6F61]" />,
    },
  ],
};

export default function Location() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block px-3 py-1 text-sm font-medium bg-[#003366]/10 text-[#003366] rounded-full mb-4">
            Prime Location
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#222222] mb-4">
            Neighborhood Highlights
          </h2>
          <p className="text-[#555555] max-w-2xl">
            Explore the vibrant surroundings and convenient access to premium
            amenities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#F5F5F5] rounded-xl overflow-hidden h-[500px] relative">
            <img
              src="https://routebyroad.com/wp-content/uploads/2017/10/Google-Maps-Bangalore.png"
              width={1600}
              height={1000}
              alt="Location map"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Map Pins */}
            {/* <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#FF6F61] rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-[#FF6F61] border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#FFA726] rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-[#FFA726] border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-3/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#003366] rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-[#003366] border-2 border-white rounded-full"></div>
              </div>
            </div> */}

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs">
              <h3 className="font-bold text-[#222222] mb-1">
                Pragathi Reality
              </h3>
              <p className="text-sm text-[#555555]">
                RR Nagar, 560098, Bengaluru
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {locationCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={` p-2 rounded-lg transition-colors text-xs duration-300 font-medium
                        ${
                          activeTab === category.id
                            ? "bg-[#003366] text-white"
                            : "bg-black/10 text-[#444444]"
                        }`}
                >
                  <div className=" flex flex-col items-center gap-1">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-xl overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.25)] p-6">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-[#222222] mb-4">
                    Prime Urban Location
                  </h3>
                  <p className="text-[#555555] mb-4">
                    Situated in the heart of Beverly Hills, our development
                    offers the perfect balance of urban convenience and
                    exclusive tranquility. Residents enjoy proximity to
                    world-class shopping, dining, and cultural attractions while
                    maintaining a sense of privacy and security.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#F5F5F5] p-3 rounded-lg">
                      <div className="text-sm text-[#555555]">Walk Score</div>
                      <div className="text-xl font-bold text-[#222222]">
                        92/100
                      </div>
                      <div className="text-xs text-[#FF6F61]">
                        Walker's Paradise
                      </div>
                    </div>
                    <div className="bg-[#F5F5F5] p-3 rounded-lg">
                      <div className="text-sm text-[#555555]">
                        Transit Score
                      </div>
                      <div className="text-xl font-bold text-[#222222]">
                        88/100
                      </div>
                      <div className="text-xs text-[#FF6F61]">
                        Excellent Transit
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === "transportation" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-[#222222] mb-4">
                    Transportation Access
                  </h3>
                  <div className="space-y-4">
                    {locationPoints.transportation.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-[#F5F5F5] rounded-lg"
                      >
                        <div className="p-2 bg-white rounded-full">
                          {point.icon}
                        </div>
                        <div>
                          <div className="font-medium text-[#222222]">
                            {point.name}
                          </div>
                          <div className="text-sm text-[#555555]">
                            {point.distance}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === "lifestyle" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-[#222222] mb-4">
                    Lifestyle & Entertainment
                  </h3>
                  <div className="space-y-4">
                    {locationPoints.lifestyle.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-[#F5F5F5] rounded-lg"
                      >
                        <div className="p-2 bg-white rounded-full">
                          {point.icon}
                        </div>
                        <div>
                          <div className="font-medium text-[#222222]">
                            {point.name}
                          </div>
                          <div className="text-sm text-[#555555]">
                            {point.distance}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-[#222222] mb-4">
                    Education
                  </h3>
                  <div className="space-y-4">
                    {locationPoints.education.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-[#F5F5F5] rounded-lg"
                      >
                        <div className="p-2 bg-white rounded-full">
                          {point.icon}
                        </div>
                        <div>
                          <div className="font-medium text-[#222222]">
                            {point.name}
                          </div>
                          <div className="text-sm text-[#555555]">
                            {point.distance}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
