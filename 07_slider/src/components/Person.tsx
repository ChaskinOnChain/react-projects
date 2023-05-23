import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  image: string;
  name: string;
  title: string;
  quote: string;
};

const Person = ({ image, name, title, quote }: Props) => {
  return (
    <>
      <img
        className="h-40 w-40 rounded-full object-cover border-4 border-indigo-200 shadow-lg"
        src={image}
        alt="girl"
      />
      <h2 className="text-indigo-600 uppercase text-2xl tracking-wider mt-2">
        {name}
      </h2>
      <h3 className="capitalize text-xl">{title}</h3>
      <p className="text-lg mt-8 text-gray-500">{quote}</p>
      <FontAwesomeIcon
        className="mt-4 text-7xl text-purple-600"
        icon={faQuoteRight}
      />
    </>
  );
};

export default Person;
