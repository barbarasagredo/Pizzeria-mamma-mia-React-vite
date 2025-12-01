import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

import "./index.css";
import CartProvider from "./contexts/CartContext.jsx";
import PizzasProvider from "./contexts/ApiPizzasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>
);
