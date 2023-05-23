import { useState } from "react";
import { Post } from "../types";
import Article from "./Article";

type Props = {
  pages: number;
  postsList: Post[][];
};

function Results({ pages, postsList }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const buttonClasses = `text-white tracking-wider px-3 py-1 bg-sky-500 rounded shadow`;
  return (
    <div className="w-full h-full  max-w-7xl flex flex-col items-center">
      <div className="flex items-center mb-12">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev: number) => prev - 1)}
          className={buttonClasses}
        >
          Prev
        </button>
        <div className="inline-block mx-3 font-bold text-xl">
          <span>{currentPage}</span> of <span>{pages}</span>
        </div>
        <button
          disabled={currentPage === pages}
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
          className={buttonClasses}
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        {postsList[currentPage - 1]?.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    </div>
  );
}

export default Results;
