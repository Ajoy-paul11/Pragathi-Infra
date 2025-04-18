import { useState } from "react";
import { motion } from "framer-motion";
// import { FaGetPocket as Pool } from "react-icons/fa";
// import { LuDumbbell as Dumbbell } from "react-icons/lu";
// import { LuTrees as Trees } from "react-icons/lu";
// import { LuShieldCheck as ShieldCheck } from "react-icons/lu";
// import { FaWifi as Wifi } from "react-icons/fa";
// import { LiaCarSideSolid as Car } from "react-icons/lia";
// import { LuUtensilsCrossed as UtensilsCrossed } from "react-icons/lu";
// import { LuSpade as Spa } from "react-icons/lu";
import kanakpuraLand from "../assets/image2.jpg";
import sakleshpuraLand from "../assets/image5.jpg";
import mandyaLand from "../assets/mandya-land.jpeg";
import mysoreLand from "../assets/mysore-land.jpg";
import kushalnagarLand from "../assets//image4.jpg";
import harohalliLand from "../assets/image3.jpg";
import kollegalaLand from "../assets/kushalnagar-land.jpg";


const amenityCategories = [
  {
    id: "Harohalli",
    name: "Harohalli",
   
    description: "Nestled near Harohalli, this haven of tranquility mirrors the self-sustaining harmony of nature, much like a lush forest. Offering a peaceful retreat, it embodies the essence of serene woods, promising a sweet, natural escape into the beauty of the earth, reminiscent of the peaceful surroundings often found near Harohalli. Prepare yourself to be mesmerized by the captivating gaze of black bucks right before your eyes in this Harohalli-adjacent sanctuary.",
    image:
      harohalliLand,
    // amenities: [
    //   {
    //     name: "State-of-the-art Fitness Center",
    //     description: "Fully equipped gym with personal training services",
    //     icon: <Dumbbell className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Resort-style Swimming Pool",
    //     description: "Heated infinity pool with cabanas and lounging areas",
    //     icon: <Pool className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Luxury Spa & Wellness Center",
    //     description:
    //       "Full-service spa offering massages, facials, and treatments",
    //     icon: <Spa className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Tennis & Pickleball Courts",
    //     description: "Professional-grade courts with equipment rental",
    //     icon: <Dumbbell className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
  {
    id: "Kanakapura",
    name: "Kanakapura",
    
    description:
      "Near Kanakpura, this sanctuary's core principle lies in living in harmony with nature. It's a place where you can experience firsthand the beauty of sustainable living and the joy of being in tune with nature, much like the natural landscapes often found around Kanakpura. Here, we're not just greening life; we're cultivating a future where humanity thrives in harmony with the earth, in this tranquil setting close to Kanakpura.",
    image:
      kanakpuraLand,
    // amenities: [
    //   {
    //     name: "Landscaped Gardens",
    //     description: "Meticulously maintained gardens with walking paths",
    //     icon: <Trees className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Rooftop Terrace",
    //     description: "Panoramic views with lounge seating and fire pits",
    //     icon: <Trees className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Private Beach Access",
    //     description:
    //       "Direct access to pristine shoreline with exclusive amenities",
    //     icon: <Trees className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Outdoor Entertainment Areas",
    //     description: "BBQ stations, dining areas, and outdoor kitchens",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
  {
    id: "Kollegala",
    name: "Kollegala",
    
    description: "In the vicinity of Kollegala, this farm embodies abundance and growth. Every practice implemented here ensures that the land not only yields more but also regenerates and revitalizes the soil, reflecting a true sense of growth often found in the fertile lands around Kollegala.",
    image:
      kollegalaLand,
    // amenities: [
    //   {
    //     name: "24/7 Concierge",
    //     description: "Personalized assistance for all resident needs",
    //     icon: <ShieldCheck className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Valet Parking",
    //     description: "Convenient valet service for residents and guests",
    //     icon: <Car className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Security Services",
    //     description: "Round-the-clock security personnel and advanced systems",
    //     icon: <ShieldCheck className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "High-speed Internet",
    //     description: "Building-wide fiber optic connectivity",
    //     icon: <Wifi className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
  {
    id: "Kushalnagara",
    name: "Kushalnagara",
    
    description: "Near Kushalnagara, this farm signifies prosperity and growth as its central tenet. Here, each seed planted, every drop of water conserved, and every inch of soil enriched contributes to collective prosperity, much like the thriving spirit often found in the Kushalnagara region.",
    image:
      kushalnagarLand,
    // amenities: [
    //   {
    //     name: "Private Dining Room",
    //     description:
    //       "Elegant space for hosting dinner parties with catering options",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Wine Cellar & Tasting Room",
    //     description: "Temperature-controlled storage with tasting events",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Resident Lounge",
    //     description: "Sophisticated space for relaxation and socializing",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Business Center",
    //     description: "Fully equipped workspace with meeting rooms",
    //     icon: <Wifi className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
  
  {
    id: "Mandya",
    name: "Mandya",
    
    description: "Mandya Farms embodies the rustic charm and fertile bounty of the region. Here, the rhythmic pulse of agriculture meets sustainable living, fostering a deep connection to the land that echoes the agricultural heartland of Mandya. Experience the satisfaction of witnessing the earth's generosity firsthand, where traditional wisdom and modern practices cultivate a future rooted in abundance. Breathe in the earthy aromas and witness the vibrant tapestry of rural life that defines this Mandya haven.",
    image:
      mandyaLand,
    // amenities: [
    //   {
    //     name: "Private Dining Room",
    //     description:
    //       "Elegant space for hosting dinner parties with catering options",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Wine Cellar & Tasting Room",
    //     description: "Temperature-controlled storage with tasting events",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Resident Lounge",
    //     description: "Sophisticated space for relaxation and socializing",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Business Center",
    //     description: "Fully equipped workspace with meeting rooms",
    //     icon: <Wifi className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
  {
    id: "Mysore",
    name: "Mysore",
    
    description: "Nestled in the serene outskirts of Mysore, this retreat offers a tranquil immersion into nature's embrace, reflecting the city's inherent peacefulness. Discover a sanctuary where sustainable practices nurture both the land and the soul, providing a harmonious escape from the everyday. Here, the gentle whispers of nature and the commitment to ecological balance create a restorative environment, allowing you to reconnect with the earth's inherent beauty in the peaceful ambiance surrounding Mysore.",
    image:
      mysoreLand,
    // amenities: [
    //   {
    //     name: "Private Dining Room",
    //     description:
    //       "Elegant space for hosting dinner parties with catering options",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Wine Cellar & Tasting Room",
    //     description: "Temperature-controlled storage with tasting events",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Resident Lounge",
    //     description: "Sophisticated space for relaxation and socializing",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Business Center",
    //     description: "Fully equipped workspace with meeting rooms",
    //     icon: <Wifi className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
  {
    id: "Sakleshpura",
    name: "Sakleshpura",
    
    description: "In the vicinity of Sakleshpura, this farm epitomizes the joy and celebration inherent in nature. Here, sustainable practices and community gatherings highlight the jubilant connection between humans and the earth, much like the vibrant atmosphere often found in Sakleshpura. It's a place where you can embrace refreshing winds, especially evocative of winter mornings in the Sakleshpura region, and lose yourself in the magical mist that often graces its landscapes.",
    image:
      sakleshpuraLand,
    // amenities: [
    //   {
    //     name: "Private Dining Room",
    //     description:
    //       "Elegant space for hosting dinner parties with catering options",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Wine Cellar & Tasting Room",
    //     description: "Temperature-controlled storage with tasting events",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Resident Lounge",
    //     description: "Sophisticated space for relaxation and socializing",
    //     icon: <UtensilsCrossed className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    //   {
    //     name: "Business Center",
    //     description: "Fully equipped workspace with meeting rooms",
    //     icon: <Wifi className="h-5 w-5 text-[#FF6F61]" />,
    //   },
    // ],
  },
];

export default function Amenities() {
  const [activeTab, setActiveTab] = useState("Harohalli");

  return (
    <section id="projects" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block px-3 py-1 text-sm font-medium bg-[#FF6F61]/10 text-[#FF6F61] rounded-full mb-4">
            Luxury Property
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#222222] mb-4">
            Upcoming Projects
          </h2>
          <p className="text-[#555555] max-w-2xl">
          Experience exceptional luxury with our exclusive selection of premium land properties.
          </p>
        </motion.div>

        <div>
          <ul className=" grid grid-cols-2 md:grid-cols-7 gap-2 bg-transparent h-auto mb-8">
            {amenityCategories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveTab(category.id)}
                  className={` w-full flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 hover:cursor-pointer
                    ${
                      activeTab === category.id
                        ? "bg-[#003366] text-white"
                        : "bg-white text-[#444444]"
                    }`}
                >
                  {category.icon}
                  <span className=" text-xs lg:text-lg">{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <div>
            {amenityCategories.map((category) => (
              <div
                key={category.id}
                className={`mt-0 transition-all duration-500 ease-in-out
                ${
                  activeTab === category.id ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-[300px] lg:h-full">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#222222] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-[#555555] mb-6">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
