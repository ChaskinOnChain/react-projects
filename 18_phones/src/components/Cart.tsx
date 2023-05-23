import { useContext } from "react";
import { PhonesContext } from "../phonesContext";
import Phone from "./Phone";

const Cart = () => {
  const context = useContext(PhonesContext);
  if (!context) {
    throw new Error("Cart must be used within a PhonesContextProvider");
  }
  const { loading, phones, cost, clear } = context;

  return (
    <div className="h-full w-full px-32 py-24 flex flex-col items-center mb-20">
      <h1 className="text-4xl tracking-wide mb-8">YOUR BAG</h1>
      {loading ? (
        <p className="text-3xl">Loading...</p>
      ) : (
        phones.map((phone) => {
          return <Phone {...phone} />;
        })
      )}
      {phones.length === 0 ? (
        <p>is currently empty</p>
      ) : (
        <>
          <div className="h-[2px] w-full bg-slate-300"></div>
          <div className="flex items-center justify-between w-full mt-4 text-lg">
            Total{" "}
            <div className="bg-indigo-500 text-white p-1 tracking-wider shadow rounded">
              ${cost.toFixed(2)}
            </div>
          </div>
          <button
            onClick={() => clear()}
            className="bg-indigo-300 text-indigo-500 py-1 px-3 mt-3 cursor-pointer tracking-wider shadow rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
