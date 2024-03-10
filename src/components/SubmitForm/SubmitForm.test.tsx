import { render, screen, fireEvent } from "@testing-library/react";
import SubmitForm from "./SubmitForm";

describe("SubmitForm", () => {
  it("updates phone number input on change", () => {
    render(<SubmitForm />);

    const phoneNumberInput = screen.getByLabelText(
      /telefon:/i
    ) as HTMLInputElement;

    fireEvent.change(phoneNumberInput, { target: { value: "12345678" } });

    expect(phoneNumberInput.value).toBe("12345678");
  });
});
