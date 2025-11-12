import "./App.css";
// import { pizzas } from "../src/assets/js/pizzas";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Cart } from "./components/Cart";
import { Pizza } from "./components/Pizza";

const App = () => {
  // const pizzaList = pizzas;
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home pizzaList={pizzaList} /> */}
      {/* <Home /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
};

export default App;
