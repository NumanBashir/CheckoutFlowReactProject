import { render, screen, fireEvent } from "@testing-library/react";
import SubmitForm from "./SubmitForm";

describe("SubmitForm", () => {
  it("updates phone number input on change", () => {
    render(<SubmitForm />);

    const phoneNumberInput = screen.getByLabelText(
      /Telefon:/i
    ) as HTMLInputElement;

    fireEvent.change(phoneNumberInput, { target: { value: "12345678" } });

    expect(phoneNumberInput.value).toBe("12345678");
  });
});

describe("SubmitForm", () => {
  it("updates first name input on change", () => {
    render(<SubmitForm />);

    const firstNameInput = screen.getByLabelText(
      /Fornavn:/i
    ) as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: "Henrik" } });

    expect(firstNameInput.value).toBe("Henrik");
  });
});
