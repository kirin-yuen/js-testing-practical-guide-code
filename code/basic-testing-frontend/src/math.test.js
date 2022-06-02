import { add } from "./math";
import { test, expect } from "vitest";

test("should summarize all number value in an array", () => {
  // Arrange
  const numbers = [10, 20, 30];

  // Act
  const result = add(numbers);

  // Assert
  const expected = 60;
  expect(result).toBe(expected);
});

test("should be return NaN if the array include an invalid number", () => {
  const numbers = ["1", "allen"];

  const result = add(numbers);

  expect(result).toBeNaN();
});

test("should be correct sum even thought the array include string number", () => {
  const numbers = ["1", 2];

  const result = add(numbers);

  const expected = numbers.reduce((prev, next) => {
    return +prev + +next;
  }, 0);

  expect(result).toBe(expected);
});

test("should return 0 if an empty array passed", () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

test("should throw error if no argument passed", () => {
  // vitest 会自动执行
  expect(add).toThrowError();
});

test("should throw error if multiple argument passed", () => {
  const resultFn = () => {
    add(1, 2);
  };

  // 可以指定抛错内容是否匹配
  expect(resultFn).toThrowError(/iterable/);
});
