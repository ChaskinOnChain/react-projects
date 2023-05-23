import axios from "axios";
import { createContext, useCallback, useEffect, useReducer } from "react";
import { ContextType, PhonesContextProviderProps, State } from "./types";
import { reducer, ACTIONS } from "./reducer";

const PhonesContext = createContext<ContextType | undefined>(undefined);

const API_URL = "https://course-api.com/react-useReducer-cart-project";

const initialState: State = {
  loading: false,
  phones: [],
  amount: 0,
  cost: 0,
};

function PhonesContextProvider({ children }: PhonesContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = useCallback(async () => {
    try {
      dispatch({ type: ACTIONS.UPDATE_LOADING });
      const res = await axios(API_URL);
      const data = res.data;
      dispatch({ type: ACTIONS.INITIALIZE_STATE, payload: data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ACTIONS.UPDATE_LOADING });
    }
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  const clear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };
  const remove = (id: string) => {
    dispatch({ type: ACTIONS.REMOVE, payload: id });
  };
  const increment = (id: string) => {
    dispatch({ type: ACTIONS.INCREMENT, payload: id });
  };
  const decrement = (id: string) => {
    dispatch({ type: ACTIONS.DECREMENT, payload: id });
  };

  return (
    <PhonesContext.Provider
      value={{ ...state, clear, remove, increment, decrement }}
    >
      {children}
    </PhonesContext.Provider>
  );
}

export { PhonesContext, PhonesContextProvider };
