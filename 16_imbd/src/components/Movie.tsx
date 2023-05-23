import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MovieType } from "../types";
import { Link } from "react-router-dom";

const Movie = ({ img, title, year, id }: MovieType) => {
  const [hover, setHover] = useState(false);

  const mdClasses = "absolute left-0 bottom-0 h-20 w-full";

  return (
    <Link
      to={`/movie/${id}`}
      className="w-full sm:w-[43.771%] md:w-[28.345%] lg:w-[21.447%] h-[28rem] sm:mx-4 mb-8 relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="h-full w-full" src={img} alt={title} />

      <AnimatePresence>
        {hover && (
          <>
            <motion.div
              className={`${mdClasses} bg-black opacity-60`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className={`${mdClasses} text-white text-lg px-4 py-2 flex flex-col justify-center`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-bold">{title}</p>
              <p>{year}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default Movie;
