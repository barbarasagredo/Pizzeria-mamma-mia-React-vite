import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emptyError, setEmptyError] = useState(false);
  const [charactersError, setCharactersError] = useState(false);
  const [samePasswordError, setSamePasswordError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    setEmptyError(false);
    setCharactersError(false);
    setSamePasswordError(false);
    setSuccessMessage(false);

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setEmptyError(true);
      return;
    }
    if (password.length < 6) {
      setCharactersError(true);
      return;
    }
    if (password !== confirmPassword) {
      setSamePasswordError(true);
      return;
    }

    setSuccessMessage(true);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="col-10 col-md-8 mx-auto border border-light-subtle shadow-sm rounded p-5">
        <h4>Registro</h4>
        <form onSubmit={validarDatos}>
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
          <div className="form-group text-start">
            <label className="my-3">Confirmar contraseña</label>
            <input
              className="form-control"
              type="password"
              name="confirm"
              placeholder="Las contraseñas deben coincidir"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {successMessage && (
            <p className="success">¡Registro exitoso! Bienvenido/a</p>
          )}
          {emptyError && (
            <p className="error">¡Todos los campos son obligatorios!</p>
          )}
          {charactersError && (
            <p className="error">
              La contraseña debe tener más de seis caracteres
            </p>
          )}
          {samePasswordError && (
            <p className="error">Las contraseñas ingresadas no coinciden</p>
          )}
          <button className="btn btn-success mt-4" type="submit">
            Registrarse
          </button>
        </form>
        <p className="pt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-decoration-none">
            Ingresa acá.
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
