/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useCart(CartContext);
};

export default CartProvider;
