import { motion, useDragControls } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const ItemAddedAnimation = () => {
  const controls = useDragControls();
  return (
    <motion.div
      drag="x"
      dragControls={controls}
      className="py-5 w-[400px] bg-white flex items-center gap-4 px-4 rounded shadow-md overflow-hidden absolute top-16 left-[28%] cursor-pointer"
      initial={{ y: -200 }}
      animate={{
        y: 0,
        transition: { type: "spring", damping: 10, stiffness: 100 },
      }}
      exit={{
        y: -200,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 1.0,
        },
      }}
    >
      <div className="h-6 w-6 bg-green-500 rounded-full text-white flex justify-center items-center">
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <p className="text-lg">Item Added To The List</p>
      <div
        className={`absolute left-0 bottom-0 h-2 bg-green-500`}
        style={{
          animationName: "reduce",
          animationDuration: "5s",
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
        }}
      ></div>
      <FontAwesomeIcon
        className="absolute right-2 top-2 cursor-pointer text-gray-400"
        icon={faTimes}
      />
    </motion.div>
  );
};

export default ItemAddedAnimation;
