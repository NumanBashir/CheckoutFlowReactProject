import { render, screen } from "@testing-library/react";
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

describe("Subtotal calculations", () => {
  it("applies a 10% rebate when subtotal is over 300", () => {
    const products = [
      { id: "1", name: "Product 1", price: 150, quantity: 1 },
      { id: "2", name: "Product 2", price: 200, quantity: 1 },
    ];

    render(<ProductTable products={products} />);

    const subtotalText = screen.getByText(/Subtotal:/i);

    const discountText = screen.getByText(
      /-\d+\.\d{2} DKK \(10% for ordrer over 300 DKK\)/i
    );

    const subtotalAfterDiscountText = screen.getByText(
      /Subtotal efter rabat:/i
    );

    // Verify that the texts exist
    expect(subtotalText).toBeInTheDocument();
    expect(discountText).toBeInTheDocument();
    expect(subtotalAfterDiscountText).toBeInTheDocument();
  });
});
