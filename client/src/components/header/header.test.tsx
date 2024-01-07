import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("displays header logo text", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText("Fakelandia")).toBeInTheDocument();
    expect(screen.getByText("Justice")).toBeInTheDocument();
    expect(screen.getByText("Department")).toBeInTheDocument();
  });
});
