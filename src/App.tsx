import { useState, useEffect } from "react";
import "./App.css";
import ProductTable from "./components/ProductTable/ProductTable";
import vitaminerData from "./data/vitaminer.json";
import { Product } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const displayedProducts = products.slice(0, 4); // Show only first 4 products

  useEffect(() => {
    setProducts(vitaminerData as unknown as Product[]);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title-cart">Din Indkøbskurv</h1>
        <div className="content">
          <ProductTable products={displayedProducts} />
        </div>
      </div>
    </>
  );
};

export default App;

// TODO: Styling of table
// TODO: Move products cart table into CartPage
// TODO: When we use router or nav place inside of App.tsx
// TODO: Create a currency/price formatter in utilities --> Create test for this
// TODO: Testing
// TODO: Move vitaminer products to basket.json
// TODO: Mobile friendliness?
