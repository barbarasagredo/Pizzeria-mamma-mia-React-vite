import "../components/CardPizza/cardPizza.css";
import { useEffect, useState } from "react";
import { useApiPizzas } from "../contexts/ApiPizzasContext";
import { Link, useParams } from "react-router";
import { useCart } from "../contexts/CartContext";

export const Pizza = () => {
  const { getPizzaById } = useApiPizzas();
  const { agregarPizza } = useCart();
  const { id } = useParams();
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    if (id) {
      getPizza(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, getPizzaById]);

  const getPizza = async (pizzaId) => {
    const selectedPizza = await getPizzaById(pizzaId);
    setPizza(selectedPizza);
  };

  if (!pizza || Object.keys(pizza).length === 0) {
    return <p>Cargando detalles de la pizza...</p>;
  }

  const handleAgregar = () => {
    agregarPizza(pizza);
  };

  return (
    <>
      <div className="div-cards p-0 row border border-light-subtle rounded shadow-sm mb-3">
        <div className="row g-0">
          <div className="col-sm-4">
            <img
              alt="{pizza.name}"
              src={pizza.img}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-sm-8 p-4 pt-0">
            <div className="card-body">
              <h5 className="card-title">
                {pizza.name
                  ? pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)
                  : ""}
                <br />
                <small className="text-muted fs-6 fw-normal">
                  ${pizza.price ? pizza.price.toLocaleString() : "0"}
                </small>
              </h5>
              <p className="card-text mt-3">{pizza.desc}</p>
              <p className="card-text">
                {" "}
                <i className="fas fa-pizza-slice me-1"></i>Ingredientes:
              </p>
              <ul className=" card-text ingredient-list">
                {pizza.ingredients?.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-footer pb-0">
              <div className="card-buttons">
                <Link to="/">
                  <button type="button" className="btn btn-outline-secondary">
                    Volver
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleAgregar}
                >
                  Añadir
                  <i className="fas fa-shopping-cart ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
