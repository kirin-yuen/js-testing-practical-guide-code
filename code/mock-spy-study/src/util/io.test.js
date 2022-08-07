import {
    test,
    expect,
    vi
} from "vitest";
import writeData from "./io";
import {
    promises as fs
} from 'fs';


const data = "side effect testing";
const filename = "data.txt";

// 将第三方模块 fs 替换成空模块
vi.mock('fs')

// 替换 path 模块的 join 方法
vi.mock("path", () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
})

// 这个 test 会有副作用，因为跑测试 writeData 里的 fs.writeFile 会写文件
test.skip('should eecute writeFile method', () => {
    // promise 都建议使用 return 让 test runner 等待
    return expect(writeData(data, filename)).resolves.toBeUndefined()
})

test('should writeFile call with filename', () => {
    writeData(data, filename)

    expect(fs.writeFile).toBeCalledWith(filename, data)
})

// writeData fs.writeFile 是第三方库提供的，不用我们自己去测试
test('should execute writeFile method by mock fn', () => {
    writeData(data, filename)

    expect(fs.writeFile).toHaveBeenCalled()
})