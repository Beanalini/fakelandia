import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Misdemeanours from "./misdemeanours";
import * as MisdemeanourContext from "../hooks/useMisdemeanoursContext";
import { Misdemeanour } from "../../../types/misdemeanours.types";

//need context
//need Misdemeanour types
//functions to mock...
describe("Misdemeanours", () => {
  const misdemeanours: Array<Misdemeanour> = [
    {
      citizenId: 123,
      misdemeanour: "rudeness",
      date: "23/12/23",
    },
    {
      citizenId: 124,
      misdemeanour: "vegetables",
      date: "24/12/23",
    },
    {
      citizenId: 125,
      misdemeanour: "lift",
      date: "25/12/23",
    },
    {
      citizenId: 126,
      misdemeanour: "united",
      date: "26/12/23",
    },
  ];
  const context = { misdemeanours: misdemeanours };

  vi.spyOn(MisdemeanourContext, "useMisdemeanours").mockReturnValue(context);
  beforeEach(() => {
    vi.spyOn(MisdemeanourContext, "useMisdemeanours").mockReturnValue(context);
  });
  afterEach(() => vi.clearAllMocks);
  it("tests that tests data from the Misdemeanour  context is rendered", async () => {
    render(<Misdemeanours />);
    expect(await screen.findByText("rudeness 🤪")).toBeInTheDocument();
    expect(await screen.findByText("united 😈")).toBeInTheDocument();
    expect(await screen.findByText("23/12/23")).toBeInTheDocument();
    expect(await screen.findByText("26/12/23")).toBeInTheDocument();
  });

  it("tests that the expected components are rendered", async () => {
    render(<Misdemeanours />);
    expect(await screen.queryAllByRole("table")).toHaveLength(1);
    expect(await screen.queryAllByRole("combobox")).toHaveLength(1);
    //count includes default setting
    expect(await screen.queryAllByRole("option")).toHaveLength(5);
    //count includes table heading row
    expect(await screen.queryAllByRole("row")).toHaveLength(5);
  });

  it("tests misdemeanours are filtered from the list of misdemeanours", async () => {
    render(<Misdemeanours />);

    const userSelect = screen.getByRole("combobox");
    fireEvent.change(userSelect, { target: { value: "rudeness" } });
    expect(await screen.findByText("123")).toBeVisible();
    expect(await screen.queryAllByRole("row")).toHaveLength(2);
    expect(await screen.queryAllByText("124")).toHaveLength(0);
  });
});
