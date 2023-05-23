export interface GithubUser {
  img: string;
  name: string;
  url: string;
}

export type PaginatedFollowers = GithubUser[][];
