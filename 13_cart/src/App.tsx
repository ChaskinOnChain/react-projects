import { useEffect, useReducer, useState } from "react";
import TopBar from "./components/TopBar";
import Phone from "./components/Phone";
import { useQuery } from "react-query";
import {
  reducer,
  ACTIONS,
  initialState,
} from "./reducerInitialStateAndFunction";
import { PhoneObjectFetch, PhoneObjectInside } from "./types";

const API_URL = "https://course-api.com/react-useReducer-cart-project";

function App() {
  const [emptyCart, setEmptyCart] = useState(false);

  const {
    isLoading,
    error,
    data: phoneArray,
  } = useQuery<PhoneObjectFetch[]>("phoneData", () =>
    fetch(API_URL).then((res) => res.json())
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (phoneArray) {
      dispatch({ type: ACTIONS.INITIALIZE, payload: phoneArray });
    }
  }, [phoneArray]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {(error as Error).message}</p>;

  function clear() {
    dispatch({ type: ACTIONS.CLEAR });
    setEmptyCart(true);
  }

  return (
    <div className="h-screen w-screen bg-slate-100 relative flex justify-center pt-44">
      <TopBar totalAmount={state.totalAmount} />
      <div className="flex flex-col items-center w-[80%] max-w-[800px]">
        <h1 className="text-4xl mb-12">YOUR BAG</h1>
        {Object.values(state.phones).map((phone: PhoneObjectInside) => {
          return (
            <Phone
              key={phone.id}
              title={
                Object.keys(state.phones).find(
                  (key) => state.phones[key] === phone
                ) || ""
              }
              price={phone.price}
              amount={phone.amount}
              img={phone.img}
              dispatch={dispatch}
            />
          );
        })}
        {emptyCart ? (
          <p className="text-2xl text-slate-500">is currently empty</p>
        ) : (
          <>
            <div className="h-[3px] w-full bg-slate-300 mt-12"></div>
            <div className="w-full flex items-center justify-between mt-3">
              <p className="tracking-wider">Total</p>
              <div className="text-white bg-indigo-500 rounded px-2 py-[2px]">
                ${state.totalCost.toFixed(2)}
              </div>
            </div>
            <button
              onClick={clear}
              className="mt-4 tracking-wider text-indigo-500 bg-indigo-300 rounded shadow px-3 py-1 hover:bg-indigo-700 hover:text-indigo-300 transition duration-500"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
