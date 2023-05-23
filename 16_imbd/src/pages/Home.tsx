import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import { MovieType } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

const API_URL = "https://www.omdbapi.com/?apikey=9add44bd&page=1&s=";

function Home() {
  const [inputValue, setInputValue] = useState("Batman");
  const [resultsInfo, setResultsInfo] = useState("");
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    search();
  }, []);

  async function search() {
    try {
      setLoading(true);
      const API = (API_URL + inputValue).split(" ").join("");
      const res = await axios(API);
      const data = res.data;
      if (Number(data.totalResults) === 0) {
        setResultsInfo("Movie Not Found");
      } else {
        setResultsInfo("");
      }
      const movieArray: MovieType[] = [];
      console.log(data.Search);
      data.Search.forEach((movie: any) => {
        movieArray.push({
          img: movie.Poster,
          title: movie.Title,
          year: movie.Year,
          id: movie.imdbID,
        });
      });
      setLoading(false);
      setMovieList(movieArray);
    } catch (error) {
      setResultsInfo("Too Many Results.");
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inputValue !== "") {
      search();
    }
  }, [inputValue]);

  return (
    <div className="h-screen w-screen bg-slate-100 pt-16 px-16 flex items-center lg:justify-center">
      <div className="flex flex-col h-full w-full max-w-[90rem]">
        <h1 className="text-5xl font-bold tracking-wider mb-6">
          Search Movies
        </h1>
        <input
          className="p-4 max-w-[37rem] w-full mb-2 rounded"
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p className="tracking-wider text-red-700 text-lg mb-32">
          {resultsInfo}
        </p>
        <div
          className={`w-full flex flex-wrap ${
            loading && "flex justify-center"
          }`}
        >
          {loading && <LoadingSpinner />}
          {movieList.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                img={movie.img}
                title={movie.title}
                year={movie.year}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
