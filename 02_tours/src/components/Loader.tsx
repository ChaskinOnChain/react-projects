import { motion } from "framer-motion";

const spinner = {
  animate: {
    rotate: [0, 360],
  },
  transition: {
    duration: 1,
    ease: "linear",
    repeat: Infinity,
  },
};

const Loader = () => {
  return (
    <motion.div
      className="w-20 h-20 border-8 border-green-600 rounded-full border-t-transparent"
      animate={spinner.animate}
      transition={spinner.transition}
    />
  );
};

export default Loader;
