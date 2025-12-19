import Swal from "sweetalert2";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [emptyError, setEmptyError] = useState(false);
  const [charactersError, setCharactersError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmptyError(false);
    setCharactersError(false);
    setSuccessMessage(false);

    if (!email.trim() || !password.trim()) {
      setEmptyError(true);
      return;
    }
    if (password.length < 6) {
      setCharactersError(true);
      return;
    }
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log("Error en el login:", error);
      Swal.fire({
        icon: "error",
        title: "Error en el ingreso",
        text: "Inténtalo nuevamente",
        confirmButtonColor: "#212529",
      });
    }
    // setSuccessMessage(true);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="col-10 col-md-8 mx-auto border border-light-subtle shadow-sm rounded p-5">
        <h4>Login</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group text-start">
            <label className="my-3">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="usuario@correo.es"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group text-start">
            <label className="my-3">Contraseña</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {successMessage && (
            <p className="success">¡Excelente! Bienvenido/a</p>
          )}
          {emptyError && (
            <p className="error">¡Todos los campos son obligatorios!</p>
          )}
          {charactersError && (
            <p className="error">
              La contraseña debe tener más de seis caracteres
            </p>
          )}
          <button className="btn btn-success mt-4" type="submit">
            Ingresar
          </button>
        </form>
        <p className="pt-4">
          ¿Quieres registrarte?{" "}
          <Link to="/register" className="text-decoration-none">
            Ingresa acá.
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
