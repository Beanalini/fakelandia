import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./home";

describe("Home", () => {
  it("displays homepage text", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to the home page!")).toBeInTheDocument();
  });
});
