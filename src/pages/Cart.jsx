import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";

const Cart = () => {
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
      <div className="border border-light-subtle shadow-sm rounded p-2 m-4">
        <h5 className="d-flex flex-column align-items-start mb-0 p-2">
          Detalles del pedido:
        </h5>
        <div className="d-flex flex-column px-1 py-3 gap-3">
          {cartItems.map((pizza) => (
            <div
              className="row g-0 align-items-center justify-content-between"
              key={pizza.id}
            >
              <div className="col col-auto me-2">
                <img
                  src={pizza.img}
                  className="img-fluid rounded-start cart-img d-flex justify-content-start"
                  alt={pizza.name}
                />
              </div>
              <div className="col col-md-2">
                <h5 className="mb-0 fs-6 fw-semibold d-flex justify-content-start">
                  Pizza {pizza.name}
                </h5>
                <small className="text-muted">
                  Subtotal: ${(pizza.price * pizza.count).toLocaleString()}
                </small>
              </div>
              <div className=" col col-md-2">
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => restarPizza(pizza.id)}
                  >
                    −
                  </button>
                  <span className="px-2">{pizza.count}</span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => sumarPizza(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* </div> */}
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

          <div className="d-flex flex-column align-items-start">
            <h4 className="my-2 mb-0">Total: ${total.toLocaleString()}</h4>
            <button
              className="btn btn-dark my-2"
              disabled={cartItems.length === 0}
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
