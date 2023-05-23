export interface PhoneObjectInside {
  id: string;
  price: number;
  amount: number;
  img: string;
}

export interface InitialStateObject {
  phones: {
    [key: string]: PhoneObjectInside;
  };
  totalAmount: number;
  totalCost: number;
}

export type PhoneObjectFetch = {
  id: string;
  title: string;
  price: number;
  amount: number;
  img: string;
};

export interface ActionsObject {
  INCREMENT: string;
  DECREMENT: string;
  REMOVE: string;
  CLEAR: string;
  INITIALIZE: string;
}

export type PhoneType =
  | "Samsung Galaxy S8"
  | "google pixel"
  | "Xiaomi Redmi Note 2"
  | "Samsung Galaxy S7";

export interface Action {
  type: string;
  payload: PhoneType | PhoneObjectFetch[];
}

export type Dispatch = (action: Action) => void;
