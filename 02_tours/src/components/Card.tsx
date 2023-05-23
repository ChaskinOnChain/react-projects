import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  name: string;
  info: string;
  image: string;
  price: string;
};

const Card = ({ name, info, image, price }: Props) => {
  const [readMore, setReadMore] = useState(false);
  const [display, setDisplay] = useState(true);

  return display ? (
    <div className="basis-11/12 rounded-md shadow bg-white overflow-hidden relative md:basis-[47%] lg:basis-[31%]">
      <img className="w-full h-96 bg-cover" src={image} alt="test" />
      <div className="px-4 pb-8">
        <h1 className="p-6 text-center text-xl font-bold tracking-wider">
          {" "}
          {name}
        </h1>
        <p className="text-lg text-gray-600">
          {readMore ? (
            <>
              {info}{" "}
              <span
                className="text-green-600 font-bold cursor-pointer"
                onClick={() => setReadMore(false)}
              >
                Show Less
              </span>
            </>
          ) : (
            <>
              {info.substring(0, 200)}...
              <span
                className="text-green-600 font-bold cursor-pointer"
                onClick={() => setReadMore(true)}
              >
                Read More
              </span>
            </>
          )}
        </p>
        <motion.button
          className="w-full cursor-pointer shadow p-2 tracking-wider text-green-500 border border-green-500 rounded mt-4"
          whileHover={{ color: "white", backgroundColor: "rgb(34,197,94)" }}
          onClick={() => setDisplay(false)}
        >
          Not Interested
        </motion.button>
        <div className="absolute right-0 top-0 bg-green-500 text-white p-2 tracking-wider text-lg">
          ${price}
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;
