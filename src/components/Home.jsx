import CardPizza from "./cardPizza/CardPizza";
import Header from "./Header";

const Home = ({ pizzaList }) => {
  return (
    <>
      <Header />
      <div className="div-cards row border border-light-subtle shadow-sm">
        {pizzaList.map((pizza) => (
          <CardPizza
            name={pizza.name}
            key={pizza.id}
            description={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
