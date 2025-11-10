import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";

export const Cart = () => {
  const [cartItems, setCartItems] = useState(pizzaCart);

  const sumarPizza = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const restarPizza = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems
        .filter((pizza) => {
          if (pizza.id === pizzaId) {
            return pizza.count > 1;
          }
          return true;
        })
        .map((pizza) => {
          if (pizza.id === pizzaId) {
            return { ...pizza, count: pizza.count - 1 };
          }
          return pizza;
        })
    );
  };

  const total = cartItems.reduce((sum, pizza) => {
    return sum + pizza.price * pizza.count;
  }, 0);

  return (
    <>
      <div className="d-flex flex-column align-items-start mx-4">
        <h5 className="ps-4">Detalles del pedido:</h5>
        <div className="col-md-8 col-12 mx-auto">
          <div className="d-flex flex-column">
            {cartItems.map((pizza) => (
              <div className="d-flex py-2 flex-column" key={pizza.id}>
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <img
                      src={pizza.img}
                      className="img-fluid rounded-start cart-img"
                      alt={pizza.name}
                    />
                  </div>
                  <div className="col-auto ">
                    <h5 className="mb-0 fw-semibold">Pizza {pizza.name}</h5>
                    <small className="text-body fw-semibold">
                      ${pizza.price.toLocaleString()}
                    </small>
                    <div className="mt-1">
                      <small className="text-muted">
                        Subtotal: $
                        {(pizza.price * pizza.count).toLocaleString()}
                      </small>
                    </div>
                  </div>
                  <div className="col-auto mt-2">
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm px-2"
                        onClick={() => restarPizza(pizza.id)}
                      >
                        −
                      </button>
                      <span className="mx-2">{pizza.count}</span>
                      <button
                        className="btn btn-outline-primary btn-sm px-2"
                        onClick={() => sumarPizza(pizza.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              // <CartCard
              //   img={pizza.img}
              //   name={pizza.name}
              //   price={pizza.price}
              //   key={pizza.id}
              //   count={pizza.count}
              // />
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-4">
                <p className="text-muted">El carrito está vacío</p>
              </div>
            )}

            <div className="d-flex flex-column align-items-start py-4">
              <h4 className="mt-2">Total: ${total.toLocaleString()}</h4>
              <button
                className="btn btn-dark"
                disabled={cartItems.length === 0}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
