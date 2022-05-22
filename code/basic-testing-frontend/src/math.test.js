import {
    add
} from "./math";
import {
    test,
    expect
} from "vitest";

test('should summarize all number value in an array', () => {
    // Arrange
    const numbers = [10, 20, 30];

    // Act
    const result = add(numbers);

    // Assert
    const expected = 60
    expect(result).toBe(expected)
})