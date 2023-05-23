import { ActionType, PhoneType, State } from "./types";

export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "UPDATE_LOADING":
      return { ...state, loading: !state.loading };
    case "INITIALIZE_STATE": {
      const data = action.payload;
      const array: PhoneType[] = [];
      let cost = 0;
      let amount = 0;
      data.forEach((phone: PhoneType) => {
        array.push({
          id: phone.id,
          title: phone.title,
          price: Number(phone.price),
          img: phone.img,
          amount: phone.amount,
        });
        cost += Number(phone.price);
        amount += phone.amount;
      });
      return { ...state, phones: array, amount, cost };
    }
    case "REMOVE": {
      const phonesArray: PhoneType[] = [];
      let newCost = state.cost;
      let newAmount = state.amount;
      state.phones.forEach((phone: PhoneType) => {
        if (phone.id !== action.payload) {
          phonesArray.push(phone);
        } else {
          newCost -= phone.amount * phone.price;
          newAmount -= phone.amount;
        }
      });
      return {
        ...state,
        phones: phonesArray,
        cost: newCost,
        amount: newAmount,
      };
    }
    case "INCREMENT": {
      const phonesArray: PhoneType[] = [];
      let newCost = state.cost;
      let newAmount = state.amount;
      state.phones.forEach((phone: PhoneType) => {
        if (phone.id === action.payload) {
          phonesArray.push({ ...phone, amount: phone.amount + 1 });
          newCost += phone.price;
          newAmount += 1;
        } else {
          phonesArray.push(phone);
        }
      });
      return {
        ...state,
        phones: phonesArray,
        cost: newCost,
        amount: newAmount,
      };
    }
    case "DECREMENT": {
      const phonesArray: PhoneType[] = [];
      let newCost = state.cost;
      let newAmount = state.amount;
      state.phones.forEach((phone: PhoneType) => {
        if (phone.id === action.payload) {
          if (phone.amount === 1) {
            newCost -= phone.price;
            newAmount -= 1;
          } else {
            newCost -= phone.price;
            newAmount -= 1;
            phonesArray.push({ ...phone, amount: phone.amount - 1 });
          }
        } else {
          phonesArray.push(phone);
        }
      });
      return {
        ...state,
        phones: phonesArray,
        cost: newCost,
        amount: newAmount,
      };
    }
    case "CLEAR":
      return { ...state, phones: [], cost: 0, amount: 0 };

    default:
      return state;
  }
};

export const ACTIONS = {
  UPDATE_LOADING: "UPDATE_LOADING",
  INITIALIZE_STATE: "INITIALIZE_STATE",
  REMOVE: "REMOVE",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CLEAR: "CLEAR",
};
