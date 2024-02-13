import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="product-card-container">
        <div className="product-row">
          <div className="product-details">
            <img
              src="src/assets/vitaminD.webp"
              className="product-image"
              alt="Product"
            />
            <div>
              <p>Produkt1</p>
              <p>200kr</p>
            </div>
          </div>
          <div className="product-actions">
            <input type="number" className="quantity-input" min="0" />
            <p className="total-item-price">400kr</p>
            <button className="delete-product">
              <img src="src/assets/trash-bin.png" className="trash-image" />
            </button>
          </div>
        </div>
        <hr className="product-line" />
      </div>
    </>
  );
};

export default ProductCard;

// TODO: Change table view to flexbox maybe
