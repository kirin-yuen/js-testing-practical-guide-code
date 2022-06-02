import { expect, test } from "vitest";
import { transformToNumber } from "./numbers";

test("should get number that passed", () => {
  const number = 3;

  const result = transformToNumber(number);

  expect(result).toBe(number);
});

test("should get number that valid string number passed", () => {
  const number = "3";

  const result = transformToNumber(number);

  expect(result).toBeTypeOf("number");
});

test("should get NaN that no arguments passed", () => {
  const result = transformToNumber();

  expect(result).toBeNaN();
});
