import { validateConfessionDetails, error1 } from "./validateConfessionDetails";

describe("test validateConfessionDetails function", () => {
  test("Given the required props When the input is the valid number of characters Then the error message array should be empty", () => {
    expect(
      validateConfessionDetails(
        "Why is it that we only eat sprouts at xmas time?)"
      )
    ).toEqual([]);
    expect(
      validateConfessionDetails(
        "Perhaps it's to reduce adding to the effect on global warming!?!?!?!"
      )
    ).toEqual([]);
  });

  test("Given the required props When the input is the invalid number of characters Then the error message array should contain an error", () => {
    const testString = [...Array(26).fill("Happy new year!! ")].join("");
    expect(validateConfessionDetails("hello")).toEqual([error1]);
    expect(validateConfessionDetails(testString)).toEqual([error1]);
  });
});
