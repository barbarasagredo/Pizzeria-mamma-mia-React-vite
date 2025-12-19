/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const [token, setToken] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const register = () => {
    console.log("Redirigiendo a registro...");
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        // token,
        login,
        logout,
        register,
        email,
        setEmail,
        password,
        setPassword,
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
