import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductTable from "./components/ProductTable/ProductTable";
import "./data/vitaminer.json";
import { Product } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsData: Product[] = [
      { id: "1", name: "Product 1", price: 10.99 },
      { id: "2", name: "Product 2", price: 5.49 },
    ];
    setProducts(productsData);
  }, []);
  return (
    <>
      <div>
        <h1 className="title-cart">Din Indkøbskurv</h1>
        <ProductTable products={products} />
      </div>
    </>
  );
};

export default App;
