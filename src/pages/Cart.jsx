import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

const Cart = () => {
  const { cartItems, sumarPizza, restarPizza, total, checkoutCart } = useCart();
  const { token } = useUser();

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4 text-center"> Detalles del pedido:</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="border border-light-subtle shadow-sm rounded p-3 m-4">
              <div className="d-flex flex-column gap-3 mb-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted fs-5">¡El carrito está vacío! </p>
                  </div>
                ) : (
                  cartItems.map((pizza) => (
                    <div
                      className="row g-3 align-items-center border-bottom pb-3"
                      key={pizza.id}
                    >
                      <div className="col-auto">
                        <img
                          src={pizza.img}
                          className="img-fluid rounded-start cart-img d-flex justify-content-start"
                          alt={pizza.name}
                        />
                      </div>
                      <div className="col-5">
                        <h5 className="mb-0 fs-6 fw-semibold">
                          {pizza.name
                            ? pizza.name.charAt(0).toUpperCase() +
                              pizza.name.slice(1)
                            : ""}
                        </h5>
                        <small className="text-muted d-block">
                          Precio unitario: ${pizza.price.toLocaleString()}
                        </small>
                      </div>
                      <div className="col-auto ms-auto">
                        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end gap-2">
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => restarPizza(pizza.id)}
                            >
                              −
                            </button>
                            <span className="px-3 fw-bold">{pizza.count}</span>
                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => sumarPizza(pizza.id)}
                            >
                              +
                            </button>
                          </div>

                          <h6
                            className="mb-0 text-nowrap"
                            style={{ minWidth: "80px" }}
                          >
                            ${(pizza.price * pizza.count).toLocaleString()}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="d-flex flex-column gap-3 align-items-end">
                <h5 className="my-0">Total:</h5>
                <h4 className="my-0 text-success">${total.toLocaleString()}</h4>
                <button
                  className="btn btn-dark py-2 col-3"
                  disabled={cartItems.length === 0 || !token}
                  onClick={() => checkoutCart(token)}
                >
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
