import React from "react";
import { Product } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductTable.css";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  const total = products.reduce((acc, product) => {
    const productTotal = product.price * (product.quantity || 0);
    return acc + productTotal;
  }, 0);

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
              <ProductRow key={product.id} product={product} />
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
