import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainLayout from "../layouts/main_layouts";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";

describe("Nav component", () => {
  it("displays nav links", async () => {
    render(<Nav />, { wrapper: BrowserRouter });
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Misdemeanours")).toBeInTheDocument();
    expect(screen.getByText("Confess To Us")).toBeInTheDocument();
  });
});

// describe("Nav links", () => {
//   it("displays nav links", async () => {
//     const user = userEvent.setup();
//     render(<MainLayout />, { wrapper: BrowserRouter });

//     await user.click(screen.getByText(/Home/i));

//     expect(screen.getByText("Welcome to the home page")).toBeInTheDocument();
//   });
// });
