import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact component testing", () => {
  
  test("Contact component render", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("button should present inside contact", () => {
    render(<Contact />);
    // Querying
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Inputs inside Contact", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
