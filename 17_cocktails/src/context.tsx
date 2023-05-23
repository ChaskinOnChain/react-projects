import axios from "axios";
import { createContext, useState, useEffect, useCallback } from "react";
import { DrinkListType, DrinkProviderProps } from "./types";

const DrinkContext = createContext<{
  loading: boolean;
  setSearchTerm: (searchTerm: string) => void;
  drinkList: DrinkListType[];
  setDrinkList: (drinkList: DrinkListType[]) => void;
} | null>(null);

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const DrinkProvider: React.FC<DrinkProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [drinkList, setDrinkList] = useState<DrinkListType[]>([]);

  const search = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios(`${API_URL}${searchTerm}`);
      const data = res.data.drinks;
      if (!data) {
        setDrinkList([]);
      } else {
        const drinkArray: DrinkListType[] = [];
        data.forEach((drink: any) => {
          drinkArray.push({
            name: drink.strDrink,
            glass: drink.strGlass,
            alcoholic: drink.strAlcoholic,
            img: drink.strDrinkThumb,
            id: drink.idDrink,
          });
        });
        setDrinkList(drinkArray);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <DrinkContext.Provider
      value={{ loading, setSearchTerm, drinkList, setDrinkList }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkContext, DrinkProvider };
