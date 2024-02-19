import React, { useState } from "react";
import { Product } from "../../interfaces/interfaces";
import "./ProductRow.css";

interface ProductRowProps {
  product: Product;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const total = product.price * quantity;

  return (
    <>
      <tr className="my-row">
        <td>{product.name}</td>
        <td>{product.price} DKK</td>
        <td>
          <input
            type="number"
            className="quantity-input"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </td>
        <td>{total} DKK</td>
        <td>
          <button className="delete-product">
            <img src="src/assets/trash-bin.png" className="trash-image" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
