import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import peopleArray from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  function handleRight() {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setDirection(1);
  }

  function handleLeft() {
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
    setDirection(-1);
  }

  function handleSurprise() {
    const randomNum = Math.floor(Math.random() * 2);
    randomNum > 0.5 ? handleRight() : handleLeft();
  }

  return (
    <div className="h-screen w-full bg-slate-100 flex justify-center items-center text-center">
      <div className="w-3/5 bg-white rounded shadow hover:shadow-2xl transition-shadow duration-700 p-6 flex flex-col items-center justify-center ">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            className="relative z-0"
            key={count}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 60 },
              opacity: { duration: 0.05 },
              duration: 0.01,
            }}
          >
            <img
              className="h-44 w-44 rounded-full"
              src={peopleArray[count].img}
              alt={peopleArray[count].alt}
            />
            <div className="absolute rounded-full h-12 w-12 bg-indigo-600 left-2 top-1 z-2 flex items-center justify-center">
              <FontAwesomeIcon
                className="h-6 w-6 text-white"
                icon={faQuoteRight}
              />
            </div>
            <div className="absolute rounded-full h-44 w-44 bg-indigo-600 -right-2 -top-1 z-[-1]"></div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence custom={direction} mode="wait">
          <motion.h1
            className="tracking-wider text-3xl mt-4"
            key={count}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 60 },
              opacity: { duration: 0.05 },
              duration: 0.01,
            }}
          >
            {peopleArray[count].name}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence custom={direction} mode="wait">
          <motion.p
            className="text-indigo-600 mt-1"
            key={count}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 60 },
              opacity: { duration: 0.05 },
              duration: 0.01,
            }}
          >
            {peopleArray[count].job}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence custom={direction} mode="wait">
          <motion.p
            className="my-4"
            key={count}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 60 },
              opacity: { duration: 0.05 },
              duration: 0.01,
            }}
          >
            {peopleArray[count].bio}
          </motion.p>
        </AnimatePresence>
        <div className="w-16 flex items-center justify-between">
          <button
            onClick={handleLeft}
            className="text-3xl text-indigo-600 hover:text-indigo-400 transition-all duration-1000"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            onClick={handleRight}
            className="text-3xl text-indigo-600 hover:text-indigo-400 transition-all duration-1000"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <button
          onClick={handleSurprise}
          className="rounded bg-indigo-300 px-6 py-2 text-indigo-600 mt-4 hover:bg-indigo-900 hover:text-indigo-300"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default App;
