import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "./components/Image";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos?per_page=15&query=";

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [dark, setDark] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    search("cat");
  }, []);

  async function search(term: string) {
    setImages([]);
    setLoading(true);
    const res = await axios(API_URL + term, {
      headers: {
        Authorization: `Client-ID ${"apLXx0oYwwTiC60eeuE2zwvTt6Yk3DyBvPxxDSM1X6c"}`,
      },
    });
    const data = res.data;
    const imageArray = [];
    data.results.forEach((img: any) => {
      imageArray.push(img.urls.regular);
    });
    setLoading(false);
    setImages(imageArray);
  }

  function handleClick() {
    if (inputValue.length !== 0) {
      search(inputValue);
    }
  }

  function handleEnter(key) {
    if (inputValue.length !== 0 && key === "Enter") {
      search(inputValue);
    }
  }

  return (
    <div
      className={`h-full w-screen ${
        dark ? "bg-zinc-700" : "bg-white"
      } pt-16 flex justify-center relative`}
    >
      <div className="w-[90%] max-w-8xl flex flex-col items-center">
        <h1 className="text-4xl text-indigo-600 mb-8">Unsplash Images</h1>
        <div className="border border-slate-300 w-full flex mb-12 max-w-4xl">
          <input
            className={`py-1 flex-grow pl-4 ${
              dark && "bg-zinc-700 text-white placeholder-white"
            }`}
            placeholder="cat"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => handleEnter(e.key)}
          />
          <button
            onClick={handleClick}
            className="bg-indigo-600 text-white py-1 px-3 flex-grow-0 hover:bg-indigo-400 hover:text-indigo-800 transition duration-500"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          {loading && <p className="text-4xl">Loading...</p>}
          {images.map((img, index) => {
            return <Image key={index} link={img} />;
          })}
        </div>
      </div>
      {dark ? (
        <FontAwesomeIcon
          className="absolute right-20 top-6 text-2xl cursor-pointer text-white"
          icon={faMoon}
          onClick={() => setDark((prev) => !prev)}
        />
      ) : (
        <FontAwesomeIcon
          className="absolute right-20 top-6 text-2xl cursor-pointer"
          icon={faSun}
          onClick={() => setDark((prev) => !prev)}
        />
      )}
    </div>
  );
}

export default App;
