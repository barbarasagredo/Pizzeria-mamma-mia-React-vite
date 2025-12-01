import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { total } = useCart();
  const [token, setToken] = useState(true);

  const handleLogin = () => {
    setToken(true);
  };

  const handleLogout = () => {
    setToken(false);
  };

  const handleRegister = () => {
    console.log("Redirigiendo a registro...");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand italian-font" to="/">
            <img src="../../pizza.png" alt="" className="img-navbar" />
            Pizzería Mamma Mia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {token ? (
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              ) : (
                <Link
                  className="nav-link"
                  to="/register"
                  onClick={handleRegister}
                >
                  Registro
                </Link>
              )}
              {token ? (
                <Link className="nav-link" to="/logout" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/login" onClick={handleLogin}>
                  Login
                </Link>
              )}
            </div>
            <div className="navbar-nav">
              <Link className="nav-link" to="/cart">
                {" "}
                <i className="fas fa-shopping-cart me-1"></i>Total: ${" "}
                {total.toLocaleString()}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
