import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  // const token = false;
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
          {/* <a className="navbar-brand italian-font" href="#">
            <img src="../../pizza.png" alt="" className="img-navbar" />
            Pizzeria Mamma Mía
          </a> */}
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
              {/* <a className="nav-link active" aria-current="page" href="#">
                <i className="fas fa-home me-1"></i>
                Home
              </a> */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {token ? (
                // <a className="nav-link" href="#">
                //   <i className="fas fa-user me-1"></i>
                //   Profile
                // </a>
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
                // <a className="nav-link" href="#" onClick={handleRegister}>
                //   <i className="fas fa-user-plus me-1"></i>
                //   Register
                // </a>
              )}
              {token ? (
                <Link className="nav-link" to="/logout" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                // <a className="nav-link" href="#" onClick={handleLogout}>
                //   <i className="fas fa-sign-out-alt me-1"></i>
                //   Logout
                // </a>
                // <a className="nav-link" href="#" onClick={handleLogin}>
                //   <i className="fas fa-sign-in-alt me-1"></i>
                //   Login
                // </a>
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
              {/* <a className="nav-link">
                <i className="fas fa-shopping-cart me-1"></i>
                Total: $ {total.toLocaleString()}
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
