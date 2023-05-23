import React from "react";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  name: string;
  glass: string;
  alcoholic: string;
  id: string;
};

const Drink = ({ img, name, glass, alcoholic, id }: Props) => {
  return (
    <div className="overflow-hidden w-full rounded shadow hover:shadow-2xl mx-4 mb-8 md:w-[44.491%] lg:w-[29%] transition duration-500">
      <img className="bg-cover bg-center object-center" src={img} alt="" />
      <div className="p-5 bg-white">
        <h1 className="tracking-wide text-4xl text-green-900 my-2">{name}</h1>
        <h4 className="text-xl tracking-widest">{glass}</h4>
        <p className="py-2">{alcoholic}</p>
        <Link
          to={`/cocktail/${name}`}
          className="rounded tracking-widest cursor-pointer bg-green-800 text-white py-1 px-2"
        >
          DETAILS
        </Link>
      </div>
    </div>
  );
};

export default Drink;
