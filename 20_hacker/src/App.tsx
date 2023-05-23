import { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import axios from "axios";
import { Post } from "./types";
import pagination from "./pagination";
import Loading from "./components/Loading";

const API_URL = "https://hn.algolia.com/api/v1/search?";
const SEARCH_VALUE = "query=";
const PAGES = "&page=";

function App() {
  const [inputValue, setInputValue] = useState("react");
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(50);
  const [postsList, setPostsList] = useState<Post[][]>([]);

  const fetchAndTransformPosts = async (input: string, page: number) => {
    const res = await axios(`${API_URL}${SEARCH_VALUE}${input}${PAGES}${page}`);
    setPages(res.data.nbPages);
    return {
      posts: res.data.hits.map((post: any) => ({
        title: post.title,
        points: post.points,
        author: post.author,
        numComments: post.num_comments,
        url: post.url,
      })),
    };
  };

  const debouncedSearch = useRef(
    debounce(async (input: string) => {
      try {
        setLoading(true);
        const page = 1;
        const firstPageData = await fetchAndTransformPosts(input, page);

        let posts: Post[] = [...firstPageData.posts];

        for (let i = 2; i < pages; i++) {
          const additionalData = await fetchAndTransformPosts(input, i);
          posts = [...posts, ...additionalData.posts];
        }

        setPostsList(pagination(posts, pages));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 1000)
  ).current;

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  return (
    <div
      className={`h-screen ${
        postsList.length > 1 && "h-full"
      } w-screen bg-slate-100 px-16 py-24 mb-241`}
    >
      <Header />
      <Search inputValue={inputValue} setInputValue={setInputValue} />
      {loading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : pages === 0 ? (
        <div className="flex items-center justify-center">
          <div className="text-2xl text-gray-600">No Results Found...</div>
        </div>
      ) : (
        <Results pages={pages} postsList={postsList} />
      )}
    </div>
  );
}

export default App;
