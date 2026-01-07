import { Link, NavLink, useNavigate } from "react-router";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  const setActiveClass = ({ isActive }) =>
    isActive ? "nav-link text-white fw-semibold" : "nav-link";

  const handlerLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand italian-font" to="/">
            <img src="https://raw.githubusercontent.com/barbarasagredo/Pizzeria-mamma-mia-React-vite/refs/heads/main/src/assets/imgs/pizza.png" alt="" className="img-navbar" />
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
              <NavLink className={setActiveClass} aria-current="page" to="/">
                Home
              </NavLink>
              {isAuthenticated ? (
                <NavLink className={setActiveClass} to="/profile">
                  Profile
                </NavLink>
              ) : (
                <NavLink
                  className={setActiveClass}
                  to="/register"
                  onClick={() => navigate(isAuthenticated ? "/" : "register")}
                >
                  Registro
                </NavLink>
              )}
              {isAuthenticated ? (
                <NavLink
                  className={setActiveClass}
                  to="/login"
                  onClick={handlerLogout}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className={setActiveClass}
                  to="/login"
                  onClick={() => navigate(isAuthenticated ? "/" : "login")}
                >
                  Login
                </NavLink>
              )}
            </div>
            <div className="navbar-nav">
              <NavLink className={setActiveClass} to="/cart">
                {" "}
                <i className="fas fa-shopping-cart me-1"></i>Total: ${" "}
                {total.toLocaleString()}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
