type Props = {
  imgUrl: string;
  imgAlt: string;
  age: number;
  name: string;
};

const Person = ({ imgUrl, imgAlt, age, name }: Props) => {
  return (
    <div className="flex items-center">
      <img className="h-20 w-20 rounded-full" src={imgUrl} alt={imgAlt} />
      <div className="ml-4">
        <h1 className="tracking-wider font-bold">{name}</h1>
        <p className="text-base text-gray-500">{age} years</p>
      </div>
    </div>
  );
};

export default Person;
