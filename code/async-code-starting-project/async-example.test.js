import { describe, expect, test } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

const userEmail = "allen@qq.com";

describe("generateToken", () => {
  // 加入 done 开启异步模式
  test("it should be generate a token value", (done) => {
    // 如果不加入 done，回调方法里的断言就不会被执行，因此直接运行测试会通过
    generateToken(userEmail, (err, token) => {
      expect(token).toBeDefined();

      done(); // vitest 或者 jest 会等待 done 被调用
    });
  });

  test("it should be generate a token value without error", (done) => {
    generateToken(userEmail, (err) => {
      // 在异步方法里面抛出的错误，不会被 test runner 接收，因此需要 try catch
      try {
        expect(err).toBeNull();

        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise", () => {
  test.only("it should be generate a token value", async () => {
    // 1. 使用 jest api
    // 尽量使用 return 返回 promise 结果
    // return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();

    // 2. 使用 then
    // return generateTokenPromise(userEmail)
    //   .then((data) => {
    //     expect(data).not.toBeDefined();
    //     done();
    //   })
    //   .catch((error) => {
    //     done(error);
    //   });

    // 3. 使用 async await
    const response = await generateTokenPromise(userEmail);
    expect(response).toBeDefined();
  });
});
