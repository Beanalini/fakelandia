import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import FilterMisdemeanour from "./filter-misdemeanour";

describe("<FilterMisdemeanour/>", () => {
  it("tests that the select list is displayed with default setting", () => {
    const mockOnChange = vi.fn;
    const props = { userValue: "Show all", onChangeUserValue: mockOnChange };
    render(<FilterMisdemeanour {...props} />);

    expect(screen.getByDisplayValue("Show all")).toBeInTheDocument();
    //screen.debug();
  });

  it("tests that the select list value changes on user selection", () => {
    const mockOnChange = vi.fn();
    const props = { userValue: "Show all", onChangeUserValue: mockOnChange };

    render(<FilterMisdemeanour {...props} />);

    //screen.debug();
    const event = screen.getByDisplayValue("Show all");
    fireEvent.change(event, { target: { value: "rudeness" } });
    expect(mockOnChange).toHaveBeenCalledWith("rudeness");
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it("test another select list  option changes on user selection", () => {
    const mockOnChange = vi.fn();
    const props = { userValue: "Show all", onChangeUserValue: mockOnChange };

    render(<FilterMisdemeanour {...props} />);

    //screen.debug();
    const event = screen.getByDisplayValue("Show all");
    fireEvent.change(event, { target: { value: "vegetables" } });
    expect(mockOnChange).toHaveBeenCalledWith("vegetables");
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
