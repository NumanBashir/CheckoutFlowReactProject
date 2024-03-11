import { render } from "@testing-library/react";
import ProductTable from "./ProductTable";

describe("ProductTable component", () => {
  it("renders empty cart message when no products are provided", () => {
    const { getByText } = render(<ProductTable products={[]} />);
    const emptyCartMessage = getByText("Kurven er tom");
    expect(emptyCartMessage).toBeInTheDocument();
  });
});

describe("ProductTable component", () => {
  it("renders table with products when products are provided", () => {
    const products = [
      { id: "1", name: "Product 1", price: 10, quantity: 2 },
      { id: "2", name: "Product 2", price: 20, quantity: 1 },
    ];

    const { getByText } = render(<ProductTable products={products} />);
    const productName1 = getByText("Product 1");
    const productName2 = getByText("Product 2");

    expect(productName1).toBeInTheDocument();
    expect(productName2).toBeInTheDocument();
  });
});
