import React, { useState, useEffect } from "react";
import { Product } from "../../interfaces/interfaces";
import "./ProductRow.css";
import trashImage from "/src/assets/trash-bin.png";

interface ProductRowProps {
  product: Product;
  onTotalChange: (productId: string, newTotal: number) => void;
  onDeleteRow: (productId: string) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  onTotalChange,
  onDeleteRow,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(product.price);

  useEffect(() => {
    const newTotal = product.price * quantity;
    setTotal(newTotal);
    onTotalChange(product.id, newTotal);
  }, [quantity, product, onTotalChange]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleDeleteRow = () => {
    onDeleteRow(product.id);
  };

  return (
    <>
      <tr className="my-row">
        <div className="image-name">
          <img className="product-image" src={product.image} />
          <td>{product.name}</td>
        </div>
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
          <input type="checkbox" className="gift-toggle" />
        </td>
        <td>
          <button className="delete-product" onClick={handleDeleteRow}>
            <img
              src="src/assets/trash-bin.png"
              className="trash-image"
              alt="Delete"
            />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
