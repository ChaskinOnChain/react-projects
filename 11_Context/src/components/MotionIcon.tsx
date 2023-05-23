import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Props {
  setShowMenu: (x: boolean) => void;
}

const MotionIcon = ({ setShowMenu }: Props) => {
  return (
    <motion.div
      onClick={() => setShowMenu(true)}
      className="absolute top-8 left-12 cursor-pointer"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <FontAwesomeIcon className="text-4xl text-sky-500" icon={faBars} />
    </motion.div>
  );
};

export default MotionIcon;
