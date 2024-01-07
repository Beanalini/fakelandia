import { render, screen } from "@testing-library/react";
import MisdemeanoursTable from "./misdemeanours-table";
import { Misdemeanour } from "../../../types/misdemeanours.types";

const misdemeanours: Array<Misdemeanour> = [
  { citizenId: 56, misdemeanour: "united", date: "5/01/24" },
];
describe("MisdemeanoursTable", () => {
  it("contains table Date column heading", () => {
    render(<MisdemeanoursTable misdemeanours={misdemeanours} />);
    expect(screen.getByText("Citizen ID")).toBeInTheDocument();
    screen.debug;
  });

  it("contains table Date column heading", () => {
    render(<MisdemeanoursTable misdemeanours={misdemeanours} />);

    expect(screen.getByText("Date")).toBeInTheDocument();
  });
  it("contains table Date column heading", () => {
    render(<MisdemeanoursTable misdemeanours={misdemeanours} />);

    expect(screen.getByText("Misdemeanour")).toBeInTheDocument();
  });
  it("contains table Date column heading", () => {
    render(<MisdemeanoursTable misdemeanours={misdemeanours} />);

    expect(screen.getByText("Details")).toBeInTheDocument();
  });
  it("contains table Date column heading", () => {
    render(<MisdemeanoursTable misdemeanours={misdemeanours} />);

    expect(screen.getByText("Punishment")).toBeInTheDocument();
  });
});
