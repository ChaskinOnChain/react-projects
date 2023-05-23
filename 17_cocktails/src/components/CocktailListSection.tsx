import { useContext } from "react";
import { DrinkContext } from "../context";
import LoadingSpinner from "./LoadingSpinner";
import Drink from "./Drink";
import { DrinkListType } from "../types";

function CocktailListSection() {
  const { loading, drinkList } = useContext(DrinkContext);

  return (
    <div className="mt-28 flex flex-col items-center w-full max-w-7xl">
      {drinkList.length === 0 ? (
        <h1>No Cocktails Matched Your Search Criteria</h1>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="tracking-widest text-green-900 font-bold text-4xl">
          Cocktails
        </h1>
      )}
      <div className="flex flex-wrap mt-16">
        {drinkList.map((drink: DrinkListType) => {
          return (
            <Drink
              key={drink.id}
              img={drink.img}
              name={drink.name}
              glass={drink.glass}
              alcoholic={drink.alcoholic}
              id={drink.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CocktailListSection;
