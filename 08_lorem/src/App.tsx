import { useState, KeyboardEvent, ChangeEvent } from "react";
import text from "./data";

function App() {
  const [inputValue, setInputValue] = useState<number>(1);
  const [textArray, setTextArray] = useState<string[]>([]);

  function handleEnter(key: string) {
    if (key === "Enter") {
      setTextArray(text.slice(0, Number(inputValue)));
    }
  }

  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center pt-40">
      <div className="w-[700px] h-screen max-w-[90%] flex flex-col items-center">
        <h1 className="text-3xl mb-4">TIRED OF BORING LOREM IPSUM?</h1>
        <div className="flex justify-center items-center gap-2">
          <label className="text-2xl" htmlFor="para">
            Paragraphs:
          </label>
          <input
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              handleEnter(e.key)
            }
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(Number(e.target.value));
            }}
            className="bg-slate-300 w-16 p-2 rounded shadow-md"
            id="para"
            type="number"
            max={8}
            min={1}
            value={inputValue}
          />
          <button
            onClick={() => setTextArray(text.slice(0, Number(inputValue)))}
            className="bg-green-500 text-white hover:bg-green-800 transition duration-500 px-3 py-2 rounded shadow-md"
          >
            Generate
          </button>
        </div>
        {textArray.map((p, index) => {
          return <p key={index}>{p}</p>; // render actual text and add a unique key
        })}
      </div>
    </div>
  );
}

export default App;
