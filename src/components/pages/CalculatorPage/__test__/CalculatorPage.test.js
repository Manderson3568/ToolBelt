import { fireEvent, render, screen } from "@testing-library/react";
import CalculatorPage from "../CalculatorPage";

describe("Keypad Test", () => {
  it("should render 0 without anything being pressed", async () => {
    render(<CalculatorPage />);
    const pElement = await screen.findAllByText(/0/i);
    expect(pElement.length).toBe(2);
  });
  it("should render text after single button pressed", async () => {
    render(<CalculatorPage />);
    const inputElement = screen.getByRole("button", { name: /1/i });
    fireEvent.click(inputElement); //trigger button 1
    const pElement = await screen.findAllByText(/1/i);
    expect(pElement.length).toBe(2);
  });
  it("should render text after multiple buttons pressed", async () => {
    render(<CalculatorPage />);
    const inputElement1 = screen.getByRole("button", { name: /1/i });
    const inputElement2 = screen.getByRole("button", { name: /2/i });
    fireEvent.click(inputElement1); //trigger button 1
    fireEvent.click(inputElement2); // trigger button 2
    const pElement = await screen.findByText(/12/i);
    expect(pElement).toBeInTheDocument();
  });
  it("should render 0 after text is input and clear button hit", async () => {
    render(<CalculatorPage />);
    const inputElement1 = screen.getByRole("button", { name: /1/i });
    const inputElement2 = screen.getByRole("button", { name: /2/i });
    const inputElement3 = screen.getByRole("button", { name: /CE/i });
    fireEvent.click(inputElement1); //trigger button 1
    fireEvent.click(inputElement2); // trigger button 2
    fireEvent.click(inputElement3); // clear current
    const pElement = await screen.findAllByText(/0/i);
    expect(pElement.length).toBe(2);
  });
  it("should render 0 after text is input and clear button hit", async () => {
    render(<CalculatorPage />);
    const inputElement1 = screen.getByRole("button", { name: /1/i });
    const inputElement2 = screen.getByRole("button", { name: /0/i });
    fireEvent.click(inputElement1); //trigger button 1
    fireEvent.click(inputElement2); // trigger button 0
    fireEvent.click(inputElement2); // trigger button 0
    const pElement = await screen.findAllByText(/0/i);
    expect(pElement.length).toBe(2);
  });
});
