import { useState, useEffect } from "react";
import Item from "./components/Item";
import ItemAddedAnimation from "./components/ItemAddedAnimation";
import { AnimatePresence } from "framer-motion";

function App() {
  const [inputValue, setInputValue] = useState("");
  const storageItem = localStorage.getItem("names");
  const initialNames = storageItem ? JSON.parse(storageItem) : [];
  const [names, setNames] = useState<string[]>(initialNames);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  function handleInput(key: string) {
    if (key === "Enter" && inputValue.length !== 0) {
      setNames([...names, inputValue]);
      setInputValue("");
      setShowAnimation(true);
    }
  }

  function handleClick() {
    if (inputValue.length !== 0) {
      setNames([...names, inputValue]);
      setInputValue("");
      setShowAnimation(true);
    }
  }

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  return (
    <div className="h-screen w-screen pt-44 bg-slate-100 flex items-start justify-center relative">
      <div className="w-1/2 p-8 flex flex-col gap-4 items-center shadow-md bg-white rounded hover:shadow-xl transition duration-500">
        <h1 className="text-3xl">Grocery Bud</h1>
        <div className="flex w-full shadow rounded overflow-hidden mb-4">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => handleInput(e.key)}
            id="add"
            className="bg-slate-100 w-[80%] pl-2 py-1 border border-slate-200"
            type="text"
          />
          <label
            onClick={handleClick}
            htmlFor="add"
            className="text-white w-[20%] bg-sky-600 flex justify-center items-center cursor-pointer hover:bg-sky-800 transition duration-500"
          >
            Add Item
          </label>
        </div>
        {names.map((n, index) => {
          return <Item name={n} key={index} id={index} />;
        })}
      </div>
      <AnimatePresence>
        {showAnimation && <ItemAddedAnimation />}
      </AnimatePresence>
    </div>
  );
}

export default App;
