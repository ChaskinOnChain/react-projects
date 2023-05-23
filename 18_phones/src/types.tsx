import { ReactNode } from "react";

export interface PhoneType {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export interface ContextType {
  loading: boolean;
  phones: PhoneType[];
  cost: number;
  amount: number;
  clear: () => void;
  remove: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}

export type PhonesContextProviderProps = {
  children: ReactNode;
};

export type State = {
  loading: boolean;
  phones: PhoneType[];
  cost: number;
  amount: number;
};

export interface ActionType {
  type: string;
  payload?: any;
}
