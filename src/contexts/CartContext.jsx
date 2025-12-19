/* eslint-disable react-refresh/only-export-components */
import Swal from "sweetalert2";
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

  const clearCart = () => setCartItems([]);

  const checkoutCart = async (token) => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cartItems,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Compra realizada!",
          text: "Tu compra va en camino 🍕",
          confirmButtonColor: "#212529",
        });
        clearCart();
      } else {
        throw new Error(data.error || "Error al procesar la compra");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No se pudo procesar",
        text: error.message,
        confirmButtonColor: "#212529",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        sumarPizza,
        restarPizza,
        total,
        agregarPizza,
        checkoutCart,
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
