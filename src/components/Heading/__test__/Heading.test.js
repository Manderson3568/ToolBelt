import { render, screen } from "@testing-library/react";
import Heading from "../Heading";

describe("heading", () => {
  it("should render same text passed into text prop", () => {
    render(<Heading text="todo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
});
