import { PhoneType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PhonesContext } from "../phonesContext";

const Phone = ({ title, price, amount, img, id }: PhoneType) => {
  const context = useContext(PhonesContext);
  if (!context) {
    throw new Error("Cart must be used within a PhonesContextProvider");
  }
  const { remove, increment, decrement } = context;

  return (
    <div className="w-full flex justify-between items-center mb-5">
      <div className="flex items-center">
        <img className="h-24 w-24 mr-6" src={img} alt="phone" />
        <div>
          <h2>{title}</h2>
          <h2>${price}</h2>
          <span
            onClick={() => remove(id)}
            className="text-indigo-500 tracking-wider cursor-pointer"
          >
            remove
          </span>
        </div>
      </div>
      <div className="text-2xl relative">
        <FontAwesomeIcon
          className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-indigo-500 font-bold cursor-pointer"
          icon={faChevronUp}
          onClick={() => increment(id)}
        />
        <FontAwesomeIcon
          className="absolute -bottom-7 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-indigo-500 font-bold cursor-pointer"
          icon={faChevronDown}
          onClick={() => decrement(id)}
        />
        {amount}
      </div>
    </div>
  );
};

export default Phone;
