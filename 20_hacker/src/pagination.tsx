import { Post } from "./types";

const pagination = function (posts: Post[], pages: number): Post[][] {
  const numberPerPage = 20;

  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = numberPerPage * index;
    return posts.slice(start, start + numberPerPage);
  });

  return newArray;
};

export default pagination;
