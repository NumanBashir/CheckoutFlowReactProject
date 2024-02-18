import { Product } from "../../interfaces/interfaces";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductTable.css";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
            <tr className="my-row">
              <td colSpan={3} className="subtotal-text">
                Subtotal
              </td>
              <td className="subtotal-amount">{subtotal.toFixed(2)} DKK</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
