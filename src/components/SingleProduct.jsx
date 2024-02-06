import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/context";

export const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            prod.photo_url
              ? prod.photo_url
              : "/assets/fresh-fruits-and-vegetables-2021-08-26-17-06-09-utc.jpg"
          }
        />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>{prod.price}</Card.Text>

          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
