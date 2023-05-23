import { useState } from "react";
import { Post } from "../types";

const Article = ({ title, points, author, numComments, url }: Post) => {
  const [remove, setRemove] = useState(false);
  return (
    <div
      className={`w-full bg-white px-8 py-3 mb-8 shadow-md rounded xl:w-[46.51%] mx-5 ${
        remove && "hidden"
      }`}
    >
      <h4 className="tracking-wider font-bold text-lg">{title}</h4>
      <p className="text-lg text-gray-600 mb-4">
        {points} points by {author} | {numComments} comments
      </p>
      <div>
        <a href={url} className="text-blue-400 mr-5">
          Read More
        </a>
        <button onClick={() => setRemove(true)} className="text-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Article;
