import React from "react";

type Props = {
  link: string;
};

const Image = ({ link }: Props) => {
  return (
    <img
      className="h-44 object-cover w-full md:w-1/2 lg:w-1/3 px-2 mb-4"
      src={link}
      alt="one"
    />
  );
};

export default Image;
