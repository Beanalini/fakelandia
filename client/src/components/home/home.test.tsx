import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./home";

describe("App", () => {
  it("Vite to be in document", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to the home page!")).toBeInTheDocument();
  });
});
