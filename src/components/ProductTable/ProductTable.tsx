import React, { useState, useEffect, useCallback } from "react";
import { Product } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductTable.css";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] =
    useState<Product[]>(products);
  const [totals, setTotals] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  const handleTotalChange = useCallback(
    (productId: string, newTotal: number) => {
      setTotals((prevState) => ({
        ...prevState,
        [productId]: newTotal,
      }));
    },
    []
  );

  const handleDeleteRow = (productId: string) => {
    const updatedProducts = displayedProducts.filter(
      (product) => product.id !== productId
    );
    setDisplayedProducts(updatedProducts);

    setTotals((prevState) => {
      const updatedTotals = { ...prevState };
      delete updatedTotals[productId];
      return updatedTotals;
    });
  };

  const subtotal = Object.values(totals).reduce((acc, total) => acc + total, 0);

  const discount = subtotal > 300 ? subtotal * 0.1 : 0;
  const newSubtotal = subtotal - discount;

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Pris</th>
              <th>Antal</th>
              <th>I Alt</th>
              <th>Gave?</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onTotalChange={handleTotalChange}
                onDeleteRow={handleDeleteRow}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="proceed-container">
        <p>
          <strong>Subtotal:</strong> {subtotal.toFixed(2)} DKK
        </p>
        {discount > 0 && (
          <>
            <p>
              <strong>Rabat:</strong> -{discount.toFixed(2)} DKK (10% for ordrer
              over 300 DKK)
            </p>
            <p>
              <strong>Subtotal efter rabat:</strong> {newSubtotal.toFixed(2)}{" "}
              DKK
            </p>
          </>
        )}
        <Button
          text="Gå til betaling"
          onClick={() => console.log("Button clicked")}
        />
      </div>
    </>
  );
};

export default ProductTable;
