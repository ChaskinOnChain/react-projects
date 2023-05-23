import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DrinkType } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Cocktail = () => {
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState<DrinkType>();
  const { id } = useParams();

  useEffect(() => {
    async function hitApi() {
      try {
        setLoading(true);
        console.log(`${API_URL}${id}`);

        const res = await axios(`${API_URL}${id}`);
        const data = res.data.drinks[0];
        console.log(data);
        let ingredients = "";
        for (let i = 1; i <= 15; i++) {
          const ingredientKey = `strIngredient${i}`;
          if (data[ingredientKey] !== null) {
            ingredients += data[ingredientKey] + " ";
          }
          ingredients.trim();
        }
        setDrink({
          name: data.strDrink,
          glass: data.strGlass,
          alcoholic: data.strAlcoholic,
          img: data.strDrinkThumb,
          instructions: data.strInstructions,
          ingredients,
          category: data.strCategory,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    hitApi();
  }, []);

  console.log(drink);

  return (
    <div className="w-full h-screen bg-slate-100 px-32 py-24 flex flex-col items-center">
      <Link
        to="/"
        className="text-xl tracking-widest bg-green-800 text-white p-2 px-4 rounded cursor-pointer"
      >
        BACK HOME
      </Link>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1>{drink?.name}</h1>
          <div className="flex flex-col md:flex-row">
            <img src={drink?.img} alt="drink" />
            <p>Name: {drink?.name}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cocktail;
