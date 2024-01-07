import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import MisdemeanourEmoji from "./misdemeanour-emoji";

describe("TableRow", () => {
  it("tests that the incorrect emoji is not displayed", () => {
    const misdemeanour = "united";
    render(<MisdemeanourEmoji misdemeanour={misdemeanour} />);
    expect(screen.queryByText("🤪")).toBeNull();

    //screen.debug();
  });

  it("renders the correct emoji mapped to the misdemeanour rudeness type", () => {
    const misdemeanour = "rudeness";
    render(<MisdemeanourEmoji misdemeanour={misdemeanour} />);
    expect(screen.getByText("🤪")).toBeInTheDocument();
  });

  it("renders the correct emoji mapped to the misdemeanour vegetables type", () => {
    const misdemeanour = "vegetables";
    render(<MisdemeanourEmoji misdemeanour={misdemeanour} />);
    expect(screen.getByText("🥗")).toBeInTheDocument();
  });
  it("renders the correct emoji mapped to the misdemeanour  lift", () => {
    const misdemeanour = "lift";
    render(<MisdemeanourEmoji misdemeanour={misdemeanour} />);
    expect(screen.getByText("🗣")).toBeInTheDocument();
  });
  it("renders the correct emoji mapped to the misdemeanour united type", () => {
    const misdemeanour = "united";
    render(<MisdemeanourEmoji misdemeanour={misdemeanour} />);
    expect(screen.getByText("😈")).toBeInTheDocument();
  });
});
