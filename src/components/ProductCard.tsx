import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="src/assets/vitaminD.webp" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">Produkt1</h2>
        <div className="product-price">
          <span className="single-price">395,00 kr</span>
          <div className="quantity">
            <input type="number" value="2" className="quantity-input" />
            <span className="total-price">790,00 kr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
