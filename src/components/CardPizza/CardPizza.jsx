import "./cardPizza.css";

const CardPizza = ({ name, description, price, ingredients, img }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-3 col-xl-3 mb-4">
        <div className="card-pizza border border-light-subtle shadow-sm">
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
            <h3 className=" italian-font">Pizza {name}</h3>
            <p className="description text-body">{description}</p>
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
              <button type="button" className="btn btn-outline-secondary">
                Ver más
              </button>
              <button type="button" className="btn btn-dark">
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
