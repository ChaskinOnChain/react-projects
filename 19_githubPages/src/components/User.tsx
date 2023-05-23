import { GithubUser } from "../types";

const User = ({ img, name, url }: GithubUser) => {
  return (
    <div className="h-72 w-full flex mx-2 mb-4 flex-col items-center pt-8 bg-white rounded shadow-xl md:w-[47.57%] lg:w-[31.59%] xl:w-[31.96%]">
      <img className="w-32 h-32 rounded-full" src={img} alt="user" />
      <p className="my-5">{name}</p>
      <a className="bg-blue-500 text-white rounded-xl px-3 py-1" href={url}>
        VIEW PROFILE
      </a>
    </div>
  );
};

export default User;
