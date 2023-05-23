import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PhonesContext } from "../phonesContext";

const Navbar = () => {
  const context = useContext(PhonesContext);
  if (!context) {
    throw new Error("Cart must be used within a PhonesContextProvider");
  }
  const { amount } = context;
  return (
    <div className="w-full h-24 bg-indigo-500 text-white px-24 py-8 flex items-center justify-between">
      <h1 className="text-2xl">UseReducer</h1>
      <div className="relative">
        <div className="absolute text-2xl z-100 bg-indigo-400 rounded-full h-8 w-8 flex items-center justify-center -top-5 -right-4">
          {amount}
        </div>
        <FontAwesomeIcon className="text-4xl" icon={faCartPlus} />
      </div>
    </div>
  );
};

export default Navbar;
