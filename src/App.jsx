import "./App.css";
// import { pizzas } from "../src/assets/js/pizzas";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { Cart } from "./pages/Cart";
import { Pizza } from "./pages/Pizza";
import Register from "./pages/Register";

const App = () => {
  // const pizzaList = pizzas;
  return (
    <>
      <Navbar />
      <Login />
      <Register />
      {/* <Home pizzaList={pizzaList} /> */}
      <Home />
      <Cart />
      <Pizza />
      <Footer />
    </>
  );
};

export default App;
