import { render, screen } from "@testing-library/react";
import CalcButton from "../CalcButton";

describe("calculator buttons", () => {
  it("should render same text passed into text prop", () => {
    render(<CalcButton text="1" />);
    const inputElement = screen.getByText(/1/i);
    expect(inputElement).toBeInTheDocument();
  });
});
