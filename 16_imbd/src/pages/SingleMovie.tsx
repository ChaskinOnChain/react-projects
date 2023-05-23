import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { MovieType } from "../types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://www.omdbapi.com/?apikey=9add44bd&page=1&i=";

interface SingleMovie {
  img: string;
  title: string;
  year: string;
  plot: string;
}

const SingleMovie = () => {
  const [inputValue, setInputValue] = useState("Batman");
  const [movie, setMovie] = useState<SingleMovie>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    search();
  }, [id]);

  async function search() {
    try {
      setLoading(true);
      const API = API_URL + id;
      const res = await axios(API);
      const data = res.data;
      console.log(data);
      setMovie({
        img: data.Poster,
        title: data.Title,
        year: data.Year,
        plot: data.Plot,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div
      className={`h-screen gap-4 w-full flex flex-col md:flex-row px-12 py-16 bg-slate-100 ${
        loading && "items-center"
      }`}
    >
      {loading && <LoadingSpinner />}
      {movie && (
        <>
          <img className="md:max-h-[600px]" src={movie.img} alt={movie.title} />
          <div>
            <h1 className="font-bold text-5xl my-8">{movie.title}</h1>
            <p className="text-lg">{movie.plot}</p>
            <p className="my-6 text-lg font-bold">{movie.year}</p>
            <Link to="/">
              <button className="py-1 px-1 bg-blue-500 text-white tracking-wider text-lg rounded">
                Back To Movies
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleMovie;
