import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// extends Vitest's expect method with methods from react-testing-library
//expect.extend(matchers);

// runs a cleanup after each test case
afterEach(() => {
  cleanup();
});
