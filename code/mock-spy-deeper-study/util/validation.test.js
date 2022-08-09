import { describe, expect, test } from "vitest";
import { validateNotEmpty } from "./validation";

describe("Test validateNotEmpty", () => {
  describe("no error", () => {
    test("should not throw error by pass a string", () => {
      const text = "text";
      const errorMessage = "error message";

      expect(() => validateNotEmpty(text, errorMessage)).not.toThrowError();
    });
  });

  describe("throw error", () => {
    test("should throw error by pass not a string", () => {
      const text = {};

      expect(() => validateNotEmpty(text)).toThrowError();
    });

    test("should throw error by pass a empty string", () => {
      const text = "";

      expect(() => validateNotEmpty(text)).toThrowError();
    });

    test("should throw error by pass a blank string", () => {
      const text = "   ";

      expect(() => validateNotEmpty(text)).toThrowError();
    });

    test("should throw specify error message", () => {
      const text = "";
      const errorMessage = "error message";

      expect(() => validateNotEmpty(text, errorMessage)).toThrowError(
        errorMessage
      );
    });
  });
});
