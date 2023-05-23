import { useContext, useEffect, useState } from "react";
import { DrinkContext } from "../context";

function SearchSection() {
  const [inputValue, setInputValue] = useState("");
  const context = useContext(DrinkContext);

  if (!context) {
    throw new Error("Cannot find DrinkProvider");
  }

  const { setSearchTerm } = context;

  useEffect(() => {
    if (inputValue !== "") {
      setSearchTerm(inputValue);
    }
  }, [inputValue, setSearchTerm]);

  return (
    <div className="w-full max-w-3xl bg-white rounded shadow-2xl p-8">
      <span className="inline-block tracking-widest text-lg text-green-900 font-bold mb-5">
        Search Your Favorite Cocktail
      </span>
      <input
        type="text"
        className="w-full bg-slate-100 p-1 h-12 rounded text-xl"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default SearchSection;
