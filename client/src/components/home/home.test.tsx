import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./home";
import * as MisdemeanourContext from "../hooks/useMisdemeanoursContext";

const context = { misdemeanours: [] };

vi.spyOn(MisdemeanourContext, "useMisdemeanours").mockReturnValue(context);
beforeEach(() => {
  vi.spyOn(MisdemeanourContext, "useMisdemeanours").mockReturnValue(context);
});
afterEach(() => vi.clearAllMocks);
describe("Home", () => {
  it("displays homepage text", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to the home/)).toBeInTheDocument();
  });
});
