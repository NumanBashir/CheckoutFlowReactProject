import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div>
        <h1 className="title-cart">Din Indkøbskurv</h1>
        <ProductCard />
      </div>
    </>
  );
}

export default App;
