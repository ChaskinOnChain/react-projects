import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Dispatch } from "../types";
import { ACTIONS } from "../reducerInitialStateAndFunction";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  price: number;
  amount: number;
  img: string;
  dispatch: Dispatch;
};

const Phone = ({ img, title, price, amount, dispatch }: Props) => {
  const [hide, setHide] = useState(false);
  function handleClick(click: string) {
    if (click === "up") {
      dispatch({ type: ACTIONS.INCREMENT, payload: title });
    } else if (click === "down") {
      dispatch({ type: ACTIONS.DECREMENT, payload: title });
    } else {
      dispatch({ type: ACTIONS.REMOVE, payload: title });
    }
  }

  useEffect(() => {
    if (amount === 0) {
      setHide(true);
    }
  }, [amount]);

  return (
    <div
      className={`flex justify-between items-center w-full mb-6 ${
        hide && "hidden"
      }`}
    >
      <div className="flex gap-4">
        <img className="h-24 w-24" src={img} alt="phone 1" />
        <div>
          <h3 className="tracking-widest">{title}</h3>
          <h3 className="text-lg text-gray-600">${price}</h3>
          <span
            onClick={() => handleClick("remove")}
            className="tracking-wider cursor-pointer text-indigo-500 hover:text-indigo-700 transition duration-500"
          >
            remove
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          className="text-3xl cursor-pointer text-indigo-500 hover:text-indigo-700 transition duration-500"
          icon={faChevronUp}
          onClick={() => handleClick("up")}
        />
        <span className="text-[24px]">{amount}</span>
        <FontAwesomeIcon
          className="text-3xl cursor-pointer text-indigo-500 hover:text-indigo-700 transition duration-500"
          icon={faChevronDown}
          onClick={() => handleClick("down")}
        />
      </div>
    </div>
  );
};

export default Phone;
