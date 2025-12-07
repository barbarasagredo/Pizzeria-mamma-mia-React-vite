import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyError, setEmptyError] = useState(false);
  const [charactersError, setCharactersError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validarDatos = (e) => {
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

    setSuccessMessage(true);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="col-10 col-md-8 mx-auto border border-light-subtle shadow-sm rounded p-5">
        <h4>Login</h4>
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
              type="text"
              name="password"
              placeholder=""
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
      </div>
    </>
  );
};

export default Login;
