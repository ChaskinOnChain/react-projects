import {
  InitialStateObject,
  ActionsObject,
  PhoneObjectFetch,
  Action,
} from "./types";

export const initialState: InitialStateObject = {
  phones: {},
  totalAmount: 0,
  totalCost: 0,
};

export function reducer(state: InitialStateObject, action: Action) {
  switch (action.type) {
    case "increment": {
      if (typeof action.payload === "string") {
        const newTotalCost = (
          state.totalCost + state.phones[action.payload].price
        ).toFixed(2);
        return {
          ...state,
          phones: {
            ...state.phones,
            [action.payload]: {
              ...state.phones[action.payload],
              amount: state.phones[action.payload].amount + 1,
            },
          },
          totalAmount: state.totalAmount + 1,
          totalCost: Number(newTotalCost),
        };
      }
      break;
    }
    case "decrement": {
      if (typeof action.payload === "string") {
        const newTotalCost = (
          state.totalCost - state.phones[action.payload].price
        ).toFixed(2);
        return {
          ...state,
          phones: {
            ...state.phones,
            [action.payload]: {
              ...state.phones[action.payload],
              amount: state.phones[action.payload].amount - 1,
            },
          },
          totalAmount: state.totalAmount - 1,
          totalCost: Number(newTotalCost),
        };
      }
      break;
    }
    case "remove": {
      if (typeof action.payload === "string") {
        const newTotalCost = (
          state.totalCost -
          state.phones[action.payload].price *
            state.phones[action.payload].amount
        ).toFixed(2);
        return {
          ...state,
          phones: {
            ...state.phones,
            [action.payload]: {
              ...state.phones[action.payload],
              amount: 0,
            },
          },
          totalAmount: state.totalAmount - state.phones[action.payload].amount,
          totalCost: Number(newTotalCost),
        };
      }
      break;
    }
    case "clear": {
      const newPhones = { ...state.phones };
      for (const phone in newPhones) {
        newPhones[phone] = {
          ...newPhones[phone],
          amount: 0,
        };
      }
      return {
        ...state,
        phones: newPhones,
        totalAmount: 0,
        totalCost: 0,
      };
    }
    case "initialize": {
      if (Array.isArray(action.payload)) {
        let totalAmount = 0;
        let totalCost = 0;
        const phones: {
          [key: string]: {
            amount: number;
            id: string;
            img: string;
            price: number;
          };
        } = {};
        action.payload.forEach((phone: PhoneObjectFetch) => {
          phones[phone.title] = {
            amount: phone.amount,
            img: phone.img,
            id: phone.id,
            price: Number(phone.price),
          };
          totalAmount += phone.amount;
          totalCost += Number(phone.price) * phone.amount;
        });

        const newTotalCost = totalCost.toFixed(2);

        return {
          ...state,
          phones,
          totalAmount,
          totalCost: Number(newTotalCost),
        };
      }
      break;
    }
  }
}

export const ACTIONS: ActionsObject = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  REMOVE: "remove",
  CLEAR: "clear",
  INITIALIZE: "initialize",
};
