/* eslint-disable react-refresh/only-export-components */
import Swal from "sweetalert2";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer token_jkt`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Credenciales incorrectas");
      if (data.token) {
        setIsAuthenticated(true);
        setUser(data.email);
        // setPassword(data.password);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.email);
        setUser(data.email);

        return data;
      }
    } catch (error) {
      console.log("Error en el login:", error);
      throw error;
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer token_jkt`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al registrar");
      if (data.token) {
        setIsAuthenticated(true);
        setUser(data.email);
        // setPassword(data.password);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.email);
        setUser(data.email);

        return data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.clear();

    Swal.fire({
      title: "¡Hasta la próxima!",
      text: "Te esperamos, vuelve pronto.",
      confirmButtonText: "Ciao!",
      confirmButtonColor: "#212529",
      background: "#ffffff",
      customClass: {
        confirmButton: "fw-semibold",
        title: "italian-font",
      },
    }).then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("userEmail");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      if (savedEmail) setUser(savedEmail);
    } else {
      setIsAuthenticated(false);
      setToken(null);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        token,
        login,
        logout,
        register,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
