import { GithubUser, PaginatedFollowers } from "./types";

const paginate = (followers: GithubUser[]): PaginatedFollowers => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowersArray = Array.from(
    { length: numberOfPages },
    (_, index) => {
      const start = index * itemsPerPage;
      return followers.slice(start, start + itemsPerPage);
    }
  );

  return newFollowersArray;
};

export default paginate;
