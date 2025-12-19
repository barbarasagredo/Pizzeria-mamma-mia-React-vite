// import { useState } from "react";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout, register } = useUser();
  const navigate = useNavigate();

  const setActiveClass = ({ isActive }) =>
    isActive ? "nav-link text-white fw-semibold" : "nav-link";

  const handlerLogout = (e) => {
    e.preventDefault();
    logout();

    Swal.fire({
      title: "¡Hasta la próxima!",
      // Aquí usamos la imagen de pizza que ya tienes en tu proyecto
      html: `
      <div style="font-size: 4rem; color:  #212529; margin-bottom: 20px;">
        <i class="fas fa-pizza-slice"></i>
      </div>
  `,
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Icono de pizza",
      confirmButtonText: "Ciao!",
      confirmButtonColor: "#212529", // El color "bg-dark" de Bootstrap
      background: "#ffffff",
      customClass: {
        confirmButton: "fw-semibold", // Añade negrita al botón si quieres
        title: 'italian-font'
      },
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
              <NavLink className={setActiveClass} aria-current="page" to="/">
                Home
              </NavLink>
              {token ? (
                <NavLink className={setActiveClass} to="/profile">
                  Profile
                </NavLink>
              ) : (
                <NavLink
                  className={setActiveClass}
                  to="/register"
                  onClick={register}
                >
                  Registro
                </NavLink>
              )}
              {token ? (
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
                  onClick={() => navigate(token ? "/" : "login")}
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
