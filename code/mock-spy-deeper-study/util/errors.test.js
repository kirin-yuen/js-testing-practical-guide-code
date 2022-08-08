import {
    describe,
    expect,
    test,
} from "vitest";
import {
    HttpError,
    ValidationError
} from "../errors";

describe('Test HttpError', () => {
    test('should get the correct property from the instance', () => {
        const statusCode = "200";
        const message = "ok";
        const data = {
            number: 20
        };

        const errorObj = new HttpError(statusCode, message, data)

        expect(errorObj.statusCode).toBe(statusCode);
        expect(errorObj.message).toBe(message);
        expect(errorObj.data).toBe(data);
    })
})

describe('Test ValidationError', () => {
    test('should get the correct property from the instance', () => {
        const message = "ok";

        const errorObj = new ValidationError(message)

        expect(errorObj.message).toBe(message);
    })
})