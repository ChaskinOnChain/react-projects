import { useEffect, useState } from "react";
import Heading from "./components/Heading";
import axios from "axios";
import { GithubUser } from "./types";
import paginate from "./utils";
import User from "./components/User";

const API_URL = "https://api.github.com/users/LarryLeftwood/following?page=";
const CACHE_KEY = "github_followers";

function App() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [followersList, setFollowersList] = useState<GithubUser[][]>([]);

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      setFollowersList(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const GithubFollowers: GithubUser[] = [];
      let page = 1;
      while (true) {
        const res = await axios(`${API_URL}${page}`);
        if (res.data.length === 0) break;
        res.data.forEach((user: any) => {
          GithubFollowers.push({
            name: user.login,
            img: user.avatar_url,
            url: user.html_url,
          });
        });
        page++;
      }
      const paginatedFollowers = paginate(GithubFollowers);
      setFollowersList(paginatedFollowers);
      localStorage.setItem(CACHE_KEY, JSON.stringify(paginatedFollowers));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function handleClick(dir: string) {
    dir === "prev" ? setPage((prev) => prev - 1) : setPage((prev) => prev + 1);
  }
  console.log(page);
  console.log(followersList.length);

  return (
    <div
      className={`w-full ${
        page === followersList.length ? "h-screen" : "h-full"
      } bg-slate-100 px-14 py-20 flex flex-col items-center`}
    >
      <Heading />
      {loading ? (
        <div className="text-3xl">Loading...</div>
      ) : (
        <>
          <div className="w-full max-w-7xl flex flex-wrap mb-8">
            {followersList[page - 1]?.map((user: GithubUser, index: number) => {
              return <User key={index} {...user} />;
            })}
          </div>
          <div className="flex justify-between w-[700px] flex-wrap">
            <button
              onClick={() => handleClick("prev")}
              className="text-blue-900 font-bold text-lg"
              disabled={page === 1}
            >
              Prev
            </button>
            {followersList.map((_, index) => {
              return (
                <button
                  onClick={() => setPage(index + 1)}
                  className={`bg-sky-300 py-1 px-3 flex justify-center items-center rounded ${
                    page === index + 1 && "bg-blue-900 text-white"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              onClick={() => handleClick("next")}
              className="text-blue-900 font-bold text-lg"
              disabled={page === followersList.length}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
