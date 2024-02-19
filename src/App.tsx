import { useState, useEffect } from "react";
import "./App.css";
import ProductTable from "./components/ProductTable/ProductTable";
import vitaminerData from "./data/vitaminer.json";
import { Product } from "./interfaces/interfaces";
import Button from "./components/Button/Button.tsx";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const displayedProducts = products.slice(0, 4); // Show only first 4 products

  useEffect(() => {
    setProducts(vitaminerData as Product[]);
  }, []);

  const handleButtonClick = () => {
    console.log("Button clicked!");
    // navigate to next page
  };

  return (
    <>
      <div className="container">
        <h1 className="title-cart">Din Indkøbskurv</h1>
        <div className="content">
          <ProductTable products={displayedProducts} />
          <div className="button-container">
            <Button
              text="Gå til betaling"
              onClick={handleButtonClick}
              className="button"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

// TODO: Styling of table
// TODO: Fix button img styling
// TODO: Move products cart table into CartPage
// TODO: When we use router or nav place inside of App.tsx
// TODO: Create a currency/price formatter in utilities
// TODO: Calculate total price in terms of quantities
