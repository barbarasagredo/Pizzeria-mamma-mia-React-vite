// import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, login, logout, register } = useUser();

  const setActiveClassa = ({ isActive }) =>
    isActive ? "nav-link text-white fw-semibold" : "nav-link";

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
              <NavLink className={setActiveClassa} aria-current="page" to="/">
                Home
              </NavLink>
              {token ? (
                <NavLink className={setActiveClassa} to="/profile">
                  Profile
                </NavLink>
              ) : (
                <NavLink
                  className={setActiveClassa}
                  to="/register"
                  onClick={register}
                >
                  Registro
                </NavLink>
              )}
              {token ? (
                <NavLink
                  className={setActiveClassa}
                  to="/logout"
                  onClick={logout}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className={setActiveClassa}
                  to="/login"
                  onClick={login}
                >
                  Login
                </NavLink>
              )}
            </div>
            <div className="navbar-nav">
              <NavLink className={setActiveClassa} to="/cart">
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
