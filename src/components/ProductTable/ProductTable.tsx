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
    throw new Error("Function not implemented.");
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
            <tr className="my-row">
              <td colSpan={3} className="subtotal-text">
                Subtotal
              </td>
              <td className="subtotal-amount">{subtotal.toFixed(2)} DKK</td>
            </tr>
            <tr className="my-row">
              <td colSpan={3} className="subtotal-text">
                Total
              </td>
              <td className="subtotal-amount">{total.toFixed(2)} DKK</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        text="Gå til betaling"
        onClick={handleButtonClick}
        className="button"
      />
    </>
  );
};

export default ProductTable;
