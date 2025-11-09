import React from "react";
import { CartCard } from "./CartCard";
import { pizzaCart } from "../assets/js/pizzas";

export const Cart = () => {
  const total = 25000;
  return (
    <>
      <div className="d-flex flex-column align-items-start mx-4">
        <h5 className="ps-4">Detalles del pedido:</h5>
        <div className="col-md-8 col-12 mx-auto">
          <div className="d-flex flex-column">
            {pizzaCart.map((pizza) => (
              <CartCard
                img={pizza.img}
                name={pizza.name}
                price={pizza.price}
                key={pizza.id}
                cuantity={pizza.quantity}
              />
            ))}

            <div className="d-flex flex-column align-items-start py-4">
              <h4 className="mt-2"> Total: ${total}</h4>
              <button className="btn btn-dark">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
