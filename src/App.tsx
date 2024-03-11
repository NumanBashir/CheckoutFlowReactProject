import React, { useState, useEffect } from "react";
import "./App.css";
import ProductTable from "./components/ProductTable/ProductTable";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import vitaminerData from "./data/basket.json";
import { Product } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(vitaminerData as unknown as Product[]);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title-cart">Din Indkøbskurv</h1>
        <h1>Køb for mere end 300 DKK og få 10% på hele din ordre!</h1>
        <div className="content">
          <ProductTable products={products} />
          <SubmitForm />
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
// TODO: Tell the user they received rebate
