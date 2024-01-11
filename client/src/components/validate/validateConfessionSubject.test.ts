import {
  validateConfessionSubject,
  error1,
  error2,
} from "./validateConfessionSubject";

describe("test validateConfessionSubject", () => {
  test("Given the required props When the input is the valid number of characters, Then the arror message array should be empty", () => {
    const testString = "Eat your peas";
    expect(validateConfessionSubject(testString)).toEqual([]);
  });

  test("Given the required props When the input is the invalid number of characters Then the error message array should contain an error", () => {
    const testString2 = [...Array(8).fill("Hello")].join("");
    expect(validateConfessionSubject("He")).toEqual([error2]);
    expect(validateConfessionSubject(testString2)).toEqual([error2]);
  });
  test("Given the required props When the input includes special characters or numbers Then  the error message array should contain error1", () => {
    expect(validateConfessionSubject("sprouts 2000")).toEqual([error1]);
    expect(validateConfessionSubject("Forest rule!!!")).toEqual([error1]);
    expect(validateConfessionSubject("Sprouts !*!*")).toEqual([error1]);
    expect(validateConfessionSubject("Hello&*ooo")).toEqual([error1]);
  });

  test("Given the required props When the input includes special characters or numbers and an invalid character length Then  the error message array should contain error1 and error2", () => {
    expect(validateConfessionSubject("Sprouts2000??? ???&&££$7878")).toEqual([
      error1,
      error2,
    ]);
    expect(validateConfessionSubject("The % time is now! 20202020")).toEqual([
      error1,
      error2,
    ]);
    expect(validateConfessionSubject("**5")).toEqual([error1, error2]);
    expect(validateConfessionSubject("£££££££56Happy new year!?!")).toEqual([
      error1,
      error2,
    ]);
  });
});
