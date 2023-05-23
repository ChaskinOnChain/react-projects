import { useState } from "react";
import Button from "./components/Button";
import menu from "./data";
import Food from "./components/Food";

function App() {
  const [cat, setCat] = useState("All");

  return (
    <div className="h-full w-full bg-slate-100 px-12">
      <div className="h-44 flex flex-col items-center justify-end">
        <div className="mb-2 text-[3rem]">Our Menu</div>
        <div className="h-[5px] w-[8.5rem] bg-amber-500"></div>
      </div>
      <div className="w-full h-28 flex justify-center items-center gap-4">
        <Button handleClick={setCat} name={"All"} />
        <Button handleClick={setCat} name={"Breakfast"} />
        <Button handleClick={setCat} name={"Lunch"} />
        <Button handleClick={setCat} name={"Shakes"} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {menu.map((item) => {
          if (
            cat === "All" ||
            cat.toLocaleLowerCase() === item.category.toLocaleLowerCase()
          ) {
            return (
              <Food
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                desc={item.desc}
                img={item.img}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
