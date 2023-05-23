import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [activateMenu, setActivateMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  function closeAll() {
    setActivateMenu(false);
    setActiveItem("");
  }

  return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center relative">
      {mobileMenu && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-white">
          <div
            onClick={() => setMobileMenu(false)}
            className="absolute top-4 right-8 cursor-pointer text-2xl font-bold"
          >
            HI
          </div>
        </div>
      )}
      <nav className="absolute h-[8%] w-[70%] top-0 left-12 flex justify-between items-center text-white">
        <h2 className="text-4xl font-bold tracking-widest">strapi</h2>
        <ul
          onMouseEnter={() => setActivateMenu(true)}
          onMouseLeave={() => setActivateMenu(false)}
          className="md:flex hidden gap-8 text-2xl cursor-pointer"
        >
          <li onMouseEnter={() => setActiveItem("PRODUCT")}>Product</li>
          <li onMouseEnter={() => setActiveItem("SOLUTIONS")}>Solutions</li>
          <li onMouseEnter={() => setActiveItem("RESOURCES")}>Resources</li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setMobileMenu(true)}
          className={`text-2xl p-2 rounded cursor-pointer absolute right-[-150px] top-5 text-blue-600 bg-white md:hidden hover:scale-110 transition duration-500 ${
            mobileMenu && "hidden"
          }`}
          icon={faBars}
        />
      </nav>
      <AnimatePresence>
        {activateMenu && (
          <div
            onMouseEnter={() => setActivateMenu(true)}
            onMouseLeave={closeAll}
          >
            <div className="absolute top-[60px] left-44 w-[75%] h-[150px] bg-blue-600"></div>
            <motion.div
              className="absolute top-32 left-12 rounded w-[90%] h-[150px] bg-white"
              animate={{ height: ["0%", "15%"] }}
              exit={{ height: ["15%", "0%"] }}
            >
              {activeItem === "PRODUCT" && "PRODUCT"}
              {activeItem === "RESOURCES" && "RESOURCES"}
              {activeItem === "SOLUTIONS" && "SOLUTIONS"}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="w-[55%] text-white text-center">
        <h1 className=" text-5xl font-bold tracking-wider leading-tight mb-4">
          Manage Any Content Anywhere
        </h1>
        <p>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript
          and fully customizable.
        </p>
      </div>
    </div>
  );
}

export default App;
