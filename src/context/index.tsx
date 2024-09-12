import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  setCart: (p0: any) => {},
});
