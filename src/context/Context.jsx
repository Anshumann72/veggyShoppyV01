import React, { createContext, useContext, useReducer } from "react";
import fruits from "../fruits.json";
import { cartReducer } from "./reducer";

const Cart = createContext();

export const Context = ({ children }) => {
  const products = fruits.map((fruit) => ({
    id: fruit.id,
    name: fruit.name,
    photo_url: fruit.photo_url,
    price: fruit.price,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
