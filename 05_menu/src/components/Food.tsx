type Props = {
  title: string;
  category: string;
  img: string;
  desc: string;
  price: number;
};

const Food = ({ title, category, img, desc, price }: Props) => {
  console.log(img);

  return (
    <div className="rounded bg-white overflow-hidden w-[500px]">
      <img className="" src={img} alt="hi" />
      <div className="px-4 py-6">
        <div className="flex w-full justify-between">
          <h2 className="text-xl font-bold capitalize">{title}</h2>
          <div className="bg-amber-500 text-white tracking-wider rounded-md p-1 mb-4">
            ${price}
          </div>
        </div>
        <p className="text-lg text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default Food;
