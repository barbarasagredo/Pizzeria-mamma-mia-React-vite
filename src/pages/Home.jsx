import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza/CardPizza";
import Header from "../components/Header";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataPizzas();
  }, []);

  const getDataPizzas = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  return (
    <>
      <Header />
      <div className="div-cards row border border-light-subtle shadow-sm">
        {data.map((pizza) => (
          <CardPizza
            name={pizza.name}
            img={pizza.img}
            ingredients={pizza.ingredients}
            description={pizza.desc}
            price={pizza.price}
            key={pizza.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
