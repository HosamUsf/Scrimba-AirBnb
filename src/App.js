import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
