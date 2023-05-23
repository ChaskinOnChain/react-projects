import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  totalAmount: number;
};

function TopBar({ totalAmount }: Props) {
  return (
    <div className="absolute text-white text-2xl bg-indigo-500 top-0 left-0 h-[90px] w-full px-20 flex items-center justify-between">
      <h1 className="tracking-wider">UseReducer</h1>
      <div className="relative">
        <FontAwesomeIcon className="text-4xl" icon={faCartPlus} />
        <div className="rounded-full absolute bg-indigo-400 h-8 w-8 top-[-18px] right-[-18px] flex justify-center items-center">
          {totalAmount}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
