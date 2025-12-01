import { useEffect } from "react";
import CardPizza from "../components/CardPizza/CardPizza";
import Header from "../components/Header";
import { useApiPizzas } from "../contexts/ApiPizzasContext";

const Home = () => {
  const { getDataPizzas, data } = useApiPizzas();

  useEffect(() => {
    getDataPizzas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="div-cards row border border-light-subtle shadow-sm">
        {data.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;
