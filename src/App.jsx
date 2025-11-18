import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { pizzas } from "../src/assets/js/pizzas";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { Cart } from "./pages/Cart";
import { Pizza } from "./pages/Pizza";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  // const pizzaList = pizzas;
  return (
    <>
      <Navbar />
      {/* <Home pizzaList={pizzaList} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="//login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Login />
      <Register />
      <Home />
      <Cart />
      <Pizza /> */}
      <Footer />
    </>
  );
};

export default App;
