import { useState } from "react";
import MotionIcon from "./components/MotionIcon";
import OptionMenu from "./components/OptionMenu";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-100 relative flex items-center justify-center">
      <MotionIcon setShowMenu={setShowMenu} />
      <AnimatePresence>
        {showMenu && <OptionMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
      <button
        onClick={() => setShowModal(true)}
        className="bg-sky-500 text-white tracking-wider px-4 py-2 rounded cursor-pointer"
      >
        Show Modal
      </button>
      {showModal && (
        <>
          <div className="z-99 absolute top-0 left-0 h-screen w-screen bg-black opacity-60"></div>

          <div className="z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[30%] w-[60%] bg-white shadow-lg flex items-center justify-center text-4xl">
            Modal Content
            <FontAwesomeIcon
              className="text-4xl text-sky-500 absolute right-4 top-4 cursor-pointer"
              icon={faTimes}
              onClick={() => setShowModal(false)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
