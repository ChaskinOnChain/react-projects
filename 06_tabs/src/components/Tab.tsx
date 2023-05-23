import { useState } from "react";

type Props = {
  active: boolean;
  name: string;
  setActiveTab: (name: string) => void;
};

const Tab = ({ active, name, setActiveTab }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li className="lg:relative lg:w-full lg:flex lg:justify-center">
      <h4
        onClick={() => setActiveTab(name)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          isHovered ? "text-emerald-600 transition duration-500" : ""
        } ${
          active && "text-emerald-600"
        } uppercase tracking-wider cursor-pointer`}
      >
        {name}
      </h4>
      <div
        className={`h-1 w-full ${
          isHovered ? "bg-emerald-600 transition duration-500" : ""
        } ${
          active && "bg-emerald-600"
        } lg:absolute lg:top-0 lg:left-0 lg:h-full lg:w-1`}
      ></div>
    </li>
  );
};

export default Tab;
