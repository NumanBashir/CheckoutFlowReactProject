import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="container">
        <img src="src/assets/vitaminD.webp" className="product-image" />
        <div className="product-desc">
          <h2>Produkt1</h2>
          <span>200kr</span>
        </div>
        <div className="quantity">
          <span>2</span>
          <p>400kr</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
