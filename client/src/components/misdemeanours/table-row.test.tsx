import { Misdemeanour } from "../../../types/misdemeanours.types";
import TableRow from "./table-row";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("TableRow", () => {
  it("renders the correct number of table row items, Id, date, misdemeanour, details, punishment", () => {
    const misdemeanour: Misdemeanour = {
      citizenId: 56,
      misdemeanour: "united",
      date: "5/01/24",
    };
    const { container } = render(<TableRow misdemeanour={misdemeanour} />);

    expect(container.getElementsByClassName("table-data").length).toBe(5);
  });
  it("displays row data correctly", () => {
    const misdemeanour: Misdemeanour = {
      citizenId: 56,
      misdemeanour: "united",
      date: "5/01/24",
    };
    const { container } = render(<TableRow misdemeanour={misdemeanour} />);

    // Assert that the table cells are rendered
    expect(screen.getByText(misdemeanour.citizenId)).toBeInTheDocument();
    expect(screen.getByText(misdemeanour.date)).toBeInTheDocument();
    expect(screen.getByText("united 😈")).toBeInTheDocument();
    expect(container.getElementsByClassName("punishment-image"));
    expect(container.getElementsByClassName("table__data--details"));
  });

  it("tests that misdemeanour details are rendered if available", () => {
    const misdemeanour: Misdemeanour = {
      citizenId: 90,
      misdemeanour: "vegetables",
      details: "Sprouts",
      date: "5/01/24",
    };
    const { container } = render(<TableRow misdemeanour={misdemeanour} />);

    // Assert that the table cells are rendered
    expect(screen.getByText(misdemeanour.citizenId)).toBeInTheDocument();
    expect(screen.getByText(misdemeanour.date)).toBeInTheDocument();
    expect(screen.getByText("vegetables 🥗")).toBeInTheDocument();
    expect(screen.getByText("Sprouts")).toBeInTheDocument();
    expect(container.getElementsByClassName("punishment-image"));
  });
});
