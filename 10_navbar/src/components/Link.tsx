import React from "react";

type Props = {
  name: string;
};

const Link = ({ name }: Props) => {
  return (
    <a
      className="cursor-pointer text-lg tracking-wider mr-2 hover:text-cyan-600"
      href=""
    >
      {name}
    </a>
  );
};

export default Link;
