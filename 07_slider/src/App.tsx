import { useEffect, useState } from "react";
import people from "./data";
import Person from "./components/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [nextDirection, setNextDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => handleChange(true), 5000);
    return () => clearInterval(timer);
  });

  function handleChange(forward = true) {
    setIsChanging(true);
    setNextDirection(forward ? 1 : -1);
    setCount((count + (forward ? 1 : -1) + people.length) % people.length);
  }

  const variants = {
    hidden: { x: direction > 0 ? 300 : -300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: {
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="h-screen w-full bg-slate-100">
      <div className="w-full h-[60%] flex items-end justify-center">
        <div className="h-3/4 w-3/4 overflow-hidden">
          <AnimatePresence mode="wait">
            <Motion
              isChanging={isChanging}
              setDirection={setDirection}
              nextDirection={nextDirection}
              setIsChanging={setIsChanging}
              count={count}
              variants={variants}
            />
          </AnimatePresence>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => handleChange(false)}
        className=" hover:bg-purple-600 text-2xl text-slate-100 bg-slate-500 p-3 rounded cursor-pointer absolute left-[75px] top-1/3 "
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={() => handleChange(true)}
        className="hover:bg-purple-600 text-2xl text-slate-100 bg-slate-500 p-3 rounded cursor-pointer absolute right-[75px] top-1/3"
        icon={faChevronRight}
      />
    </div>
  );
}

export default App;

function Motion({
  isChanging,
  setDirection,
  nextDirection,
  setIsChanging,
  count,
  variants,
}) {
  return (
    <motion.div
      onAnimationComplete={() => {
        if (isChanging) {
          setDirection(nextDirection);
          setIsChanging(false);
        }
      }}
      className="h-full w-full flex gap-2 flex-col items-center text-center relative"
      key={count}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Person {...people[count]} />
    </motion.div>
  );
}
