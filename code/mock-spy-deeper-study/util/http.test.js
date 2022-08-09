import { describe, expect, test, vi } from "vitest";
import { sendDataRequest } from "./http";

describe("Test sendDataRequest", () => {
  describe("Test mock fetch", () => {
    const mockFetch = vi.fn((url, options) => {
      return new Promise((resolve, reject) => {
        // 要求 option.body 是字符串类型
        if (typeof options.body !== "string") {
          return reject("not a string");
        }
        
        resolve({
          ok: true,
          json: () => {
            const data = JSON.parse(options.body);

            return new Promise((resolve, reject) => {
              resolve({
                ...data,
              });
            });
          },
        });
      });
    });

    // mock 全局对象或方法
    vi.stubGlobal("fetch", mockFetch);

    const data = { name: "allen" };

    test("should fetch to be call", async () => {
      await sendDataRequest(data);

      expect(mockFetch).toHaveBeenCalled();
      expect(mockFetch).toHaveBeenCalledWith("https://dummy-site.dev/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });

    test("should get the correct data", async () => {
      const responseData = await sendDataRequest(data);

      expect(responseData).toEqual(data);
      // return expect(sendDataRequest(data)).resolves.toEqual(data);
    });

    test("should option.data string type", async () => {
      let testError;

      try {
        await sendDataRequest(data);
      } catch (error) {
        testError = error
      }

      expect(testError).not.toBe("not a string")
    });
  });
});
