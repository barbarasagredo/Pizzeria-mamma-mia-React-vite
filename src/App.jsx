import "./App.css";
import { pizzas } from "../src/assets/js/pizzas";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  const pizzaList = pizzas;
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
      <Home pizzaList={pizzaList} />
      <Footer />
    </>
  );
};

export default App;
