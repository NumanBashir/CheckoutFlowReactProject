import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="table-container">
        <table>
          <tr>
            <td>
              <img
                src="src/assets/vitaminD.webp"
                className="product-image"
                alt="Product"
              />
            </td>
            <td className="td2">
              <p>Produkt1</p>
              <p>200kr</p>
            </td>
            <td>
              <input type="number" className="quantity-input" min="0" />
            </td>
            <td>
              <p>400kr</p>
            </td>
            <td>
              <img
                src="src/assets/trash-bin.png"
                className="trash-image"
                alt="Product"
              />
            </td>
          </tr>
        </table>
        <hr className="product-line" />
      </div>
    </>
  );
};

export default ProductCard;
