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
  const [nearRebateThreshold, setNearRebateThreshold] = useState(false);

  // Antager at logik for at finde upsell produkt er på plads
  const upsellMessage =
    product.upsellProductId === "vitamin-c-depot-500-250" ? (
      <strong>
        Overvej at købe {product.upsellProductId} for at få mere for pengene
      </strong>
    ) : (
      ""
    );
  useEffect(() => {
    var newTotal;
    const isEligibleForRebate = quantity >= product.rebateQuantity;
    const quantityToRebate = product.rebateQuantity - quantity;

    if (isEligibleForRebate) {
      newTotal = quantity * product.price * (1 - product.rebatePercent / 100);
    } else {
      newTotal = product.price * quantity;
    }

    setTotal(newTotal);
    onTotalChange(product.id, newTotal);

    setNearRebateThreshold(quantityToRebate > 0 && quantityToRebate <= 4);
  }, [quantity, product, onTotalChange]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleDeleteRow = () => {
    onDeleteRow(product.id);
  };

  return (
    <>
      <tr className="my-row">
        <div className="image-name">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
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
          {nearRebateThreshold && (
            <div className="rebate-nudge">
              Køb {product.rebateQuantity - quantity} mere for at få{" "}
              {product.rebatePercent}% rabat!
            </div>
          )}
          {/* Tilføjelse af upsell besked */}
          {upsellMessage && <div className="upsell-nudge">{upsellMessage}</div>}
        </td>
        <td>{total} DKK</td>
        <td>
          <button className="delete-product" onClick={handleDeleteRow}>
            <img src={trashImage} className="trash-image" alt="Delete" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
