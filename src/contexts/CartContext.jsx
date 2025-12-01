/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const agregarPizza = (newPizza) => {
    setCartItems((prevItems) => {
      const itemExistente = prevItems.find((pizza) => pizza.id === newPizza.id);

      if (itemExistente) {
        return prevItems.map((pizza) =>
          pizza.id === newPizza.id
            ? { ...pizza, count: pizza.count + 1 }
            : pizza
        );
      } else {
        return [...prevItems, { ...newPizza, count: 1 }];
      }
    });
  };

  const sumarPizza = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const restarPizza = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems
        .filter((pizza) => {
          if (pizza.id === pizzaId) {
            return pizza.count > 1;
          }
          return true;
        })
        .map((pizza) => {
          if (pizza.id === pizzaId) {
            return { ...pizza, count: pizza.count - 1 };
          }
          return pizza;
        })
    );
  };

  const total = cartItems.reduce((sum, pizza) => {
    return sum + pizza.price * pizza.count;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        sumarPizza,
        restarPizza,
        total,
        agregarPizza,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
