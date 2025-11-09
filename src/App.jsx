import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Register />
      {/* <Home /> */}
      <Footer />
    </>
  );
};

export default App;
