import React, { useState, useEffect } from "react";
import { Product } from "../../interfaces/interfaces";
import "./ProductRow.css";

interface ProductRowProps {
  product: Product;
  onTotalChange: (productId: string, newTotal: number) => void; // add onTotalChange prop
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onTotalChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(product.price);

  useEffect(() => {
    const newTotal = product.price * quantity;
    setTotal(newTotal);
    onTotalChange(product.id, newTotal); // notify parent component of total change
  }, [quantity, product, onTotalChange]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

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
