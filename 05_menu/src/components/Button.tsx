type Props = {
  name: string;
  handleClick: (category: string) => void;
};

const Button = ({ name, handleClick }: Props) => {
  return (
    <button
      onClick={() => handleClick(name)}
      className="text-white px-4 py-1 bg-amber-500 rounded shadow cursor-pointer hover:bg-amber-800 transition duration-500"
    >
      {name}
    </button>
  );
};

export default Button;
