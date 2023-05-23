import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-4 border-2 border-gray-300 rounded mb-5 shadow-lg relative">
      <h2 className="font-bold">{question}</h2>
      {show && <div className="mt-4">{answer}</div>}
      <div
        onClick={() => setShow((prev) => !prev)}
        className="absolute cursor-pointer h-9 w-9 rounded-full bg-blue-950 right-4 top-3 flex justify-center items-center"
      >
        {show ? (
          <FontAwesomeIcon className="text-white" icon={faMinus} />
        ) : (
          <FontAwesomeIcon className="text-white" icon={faPlus} />
        )}
      </div>
    </div>
  );
};

export default Question;
