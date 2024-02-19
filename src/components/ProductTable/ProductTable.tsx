// ProductTable.tsx
import React, { useState } from "react";
import { Product } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductTable.css";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [totals, setTotals] = useState<{ [key: string]: number }>({});

  const handleTotalChange = (productId: string, newTotal: number) => {
    setTotals(prevState => ({
      ...prevState,
      [productId]: newTotal
    }));
  };

  const subtotal = Object.values(totals).reduce((acc, total) => acc + total, 0);

  function handleButtonClick(): void {
    console.log("Button clicked");
  }

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onTotalChange={handleTotalChange}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="proceed-container">
        <p>
          <strong>Subtotal:</strong> {subtotal.toFixed(2)} DKK{" "}
        </p>
        <Button text="Gå til betaling" onClick={handleButtonClick} />
      </div>
    </>
  );
};

export default ProductTable;
