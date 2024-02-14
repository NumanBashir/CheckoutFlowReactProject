import { Product } from "../../interfaces/interfaces";
import "./ProductRow.css";

interface ProductRowProps {
  product: Product;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <>
      <tr className="my-row">
        <td>{product.name}</td>
        <td>{product.price} DKK</td>
        <td>
          <input type="number" className="quantity-input" min="0" />
        </td>
        <td>Calculate total here</td>
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
