import React from "react";
import { CartState } from "../context/context";
import fruits from "../fruits.json";
import { SingleProduct } from "./SingleProduct";
import "./styles.css";
const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="Home">
      <div className="productContainer">
        {fruits.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id}></SingleProduct>;
        })}
      </div>
    </div>
  );
};

export default Home;
