import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Confession from "./confession";
import * as MisdemeanourContext from "../hooks/useMisdemeanoursContext";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const context = { misdemeanours: [] };

vi.spyOn(MisdemeanourContext, "useMisdemeanours").mockReturnValue(context);
beforeEach(() => {
  vi.spyOn(MisdemeanourContext, "useMisdemeanours").mockReturnValue(context);
});
afterEach(() => vi.clearAllMocks);

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const postResponse = http.post("http://localhost:8080/api/confess", () =>
  HttpResponse.json({ success: true, message: "Confession Posted!" })
);

describe("<confession/> component", () => {
  it("renders the expected elements on the page", () => {
    render(<Confession />);
    expect(screen.getByText(/committing misdemeanours/)).toBeInTheDocument();
  });

  it("displays the form submit button in disabled state", () => {
    render(<Confession />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("button state is changed to enabled when all form input fields are valid", async () => {
    render(<Confession />);
    //screen.debug();

    const confessionSubject = screen.getByTestId("confessionSubject");
    fireEvent.change(confessionSubject, {
      target: { value: "Sprouts" },
    });

    const reasonForConfession = screen.getByTestId("reasonForConfession");
    fireEvent.change(reasonForConfession, { target: { value: "vegetables" } });

    const confessionDetails = screen.getByTestId("confessionDetails");
    fireEvent.change(confessionDetails, {
      target: { value: "Why do we only eat sprouts at xmas?" },
    });

    expect(await screen.getByRole("button")).toBeEnabled();
  });

  it("returns a success message when the form is submitted", async () => {
    server.use(postResponse);
    render(<Confession />);
    //screen.debug();

    const confessionSubject = screen.getByTestId("confessionSubject");
    fireEvent.change(confessionSubject, {
      target: { value: "Sprouts" },
    });

    const reasonForConfession = screen.getByTestId("reasonForConfession");
    fireEvent.change(reasonForConfession, { target: { value: "vegetables" } });

    const confessionDetails = screen.getByTestId("confessionDetails");
    fireEvent.change(confessionDetails, {
      target: { value: "Why do we only eat sprouts at xmas?" },
    });

    expect(await screen.getByRole("button")).toBeEnabled();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.findAllByText("Confession Posted!")).toBeInTheDocument;
  });
});
