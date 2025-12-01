/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const ApiPizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getDataPizzas = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  const getPizzaById = async (id) => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error al cargar pizza con ID ${id}`);
      }
      const pizza = await res.json();
      return pizza;
    } catch (error) {
      console.error("No se pudo obtener la pizza:", error);
      return {};
    }
  };

  return (
    <ApiPizzasContext.Provider
      value={{ getDataPizzas, data, setData, getPizzaById }}
    >
      {children}
    </ApiPizzasContext.Provider>
  );
};

export const useApiPizzas = () => {
  return useContext(ApiPizzasContext);
};

export default PizzasProvider;
