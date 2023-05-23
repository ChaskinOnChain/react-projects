import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  setShowMenu: (x: boolean) => void;
}

const OptionMenu = ({ setShowMenu }: Props) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-screen w-[40%] bg-white z-100 pt-28 flex flex-col justify-between"
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: -500 }}
      transition={{ duration: 0.75, type: "spring" }}
    >
      <ul>
        <li className="py-4 pl-4 text-xl w-full cursor-pointer hover:bg-slate-100 transition duration-500">
          Home
        </li>
        <li className="py-4 pl-4 text-xl w-full cursor-pointer hover:bg-slate-100 transition duration-500">
          Team
        </li>
        <li className="py-4 pl-4 text-xl w-full cursor-pointer hover:bg-slate-100 transition duration-500">
          Calendar
        </li>
        <li className="py-4 pl-4 text-xl w-full cursor-pointer hover:bg-slate-100 transition duration-500">
          Documents
        </li>
      </ul>
      <div>hi</div>
      <FontAwesomeIcon
        className="text-4xl text-sky-500 absolute right-4 top-4 cursor-pointer"
        icon={faTimes}
        onClick={() => setShowMenu(false)}
      />
      <img className="absolute top-4 left-4" src="images/logo.svg" alt="logo" />
    </motion.div>
  );
};

export default OptionMenu;
