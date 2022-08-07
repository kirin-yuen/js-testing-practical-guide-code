import {
    describe,
    expect,
    test,
    vi
} from "vitest";
import {
    generateReportData
} from "./data";

describe('Test generateReportData', () => {
    test('should execute paramter fn if passed', () => {
        const logFn = vi.fn();

        generateReportData(logFn);

        expect(logFn).toHaveBeenCalled()
    })
})