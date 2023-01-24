import { render, screen } from "@testing-library/react";
import Subheading from "../Subheading";

describe("heading", () => {
  it("should render same text passed into text prop", () => {
    render(<Subheading text="Urgent" />);
    const h2Element = screen.getByText(/urgent/i);
    expect(h2Element).toBeInTheDocument();
  });
});
