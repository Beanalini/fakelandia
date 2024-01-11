import { validateReasonForContact, error1 } from "./validateReasonForContact";

describe("Testing validateTwoPlusTwo validation function", () => {
  test("Given the required props When the input is the default setting  then the error message array should contain an error message", () => {
    expect(validateReasonForContact("blank")).toEqual([error1]);
  });
});
