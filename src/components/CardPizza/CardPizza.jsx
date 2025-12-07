import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";
import "./cardPizza.css";

const CardPizza = (props) => {
  const { agregarPizza } = useCart();
  const navigate = useNavigate();

  const { name, desc, price, ingredients, img, id } = props.pizza;

  const handleAgregar = () => {
    agregarPizza(props.pizza);
  };

  return (
    <>
      <div className="col-12 col-md-5 col-lg-5 col-xl-3 mb-4">
        <div className="card-pizza border border-light-subtle shadow-sm rounded">
          <div>
            <img
              className="avatar"
              src={img}
              alt={name}
              width="100%"
              height="40%"
            />
          </div>
          <div className="card-title">
            <h3 className=" italian-font">
              {name ? name.charAt(0).toUpperCase() + name.slice(1) : ""}
            </h3>
            <p className="description text-body">{desc}</p>
          </div>
          <div className="card-ingredients">
            <div className="mb-3 text-body">
              <h6>
                {" "}
                <i className="fas fa-pizza-slice me-1"></i>Ingredientes:
              </h6>
            </div>
            <div className="ingredient-list">
              {ingredients.map((ingredient, index) => (
                <ul key={index} className="ingredient-item">
                  <li>{ingredient}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <h4>Precio: ${price.toLocaleString()}</h4>
            <div className="card-buttons">
              <button
                onClick={() => navigate(`/pizza/${id}`)}
                type="button"
                className="btn btn-outline-secondary"
              >
                Ver más
              </button>
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
    </>
  );
};

export default CardPizza;
