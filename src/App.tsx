import "./App.css";
import ProductCard from "./components/ProductCard";

// App-komponenten, der indeholder CartHeader
const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="title-cart">Din Indkøbskurv</h1>
      {/* Resten af din indkøbskurvs komponenter */}
      <ProductCard />
    </div>
  );
};

export default App;
