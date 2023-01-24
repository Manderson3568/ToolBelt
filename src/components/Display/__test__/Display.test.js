import { render, screen } from "@testing-library/react";
import Display from "../Display";

describe("display", () => {
  it("should render same text passed into currentNumber prop", () => {
    render(<Display currentNumber="1" />);
    const pElement = screen.getByText(/1/i);
    expect(pElement).toBeInTheDocument();
  });
  it("should not render operator", () => {
    render(<Display currentNumber="1" />);
    const pElement = screen.getByText(/1/i);
    expect(pElement).toBeInTheDocument();
  });
  it("should not render total", () => {
    render(<Display currentNumber="1" />);
    const pElement = screen.getByText(/1/i);
    expect(pElement).toBeInTheDocument();
  });
  it("should render same text passed into total prop", () => {
    render(<Display total="1" />);
    const pElement = screen.getByText(/1/i);
    expect(pElement).toBeInTheDocument();
  });
  it("should render same text passed into operator prop", () => {
    render(<Display operator="+" />);
    const pElement = screen.getByText(/\+/i);
    expect(pElement).toBeInTheDocument();
  });
});
