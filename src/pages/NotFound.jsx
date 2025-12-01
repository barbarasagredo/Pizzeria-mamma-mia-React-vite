import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <div className="container-fluid not-found">
        <i className="fa-solid fa-pizza-slice"></i>
        <i className="fa-solid fa-question ms-2"></i>
        <h3 className="fw-bolder italian-font">404</h3>
        <div className="d-flex flex-column ">
          <p className="m-0">La página que buscas no existe.</p>
          <Link className="text-decoration-none text-secondary" to="/">
           Volver al inicio.
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
