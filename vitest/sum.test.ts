import { sum } from "../utils/sum";
import { describe, expect, it } from "vitest";
// https://cn.vitest.dev/guide/features.html  vitest 文档
/**
 * 描述: 测试 sum 函数
 */
describe("sum", () => {
  /**
   * 测试用例: 验证 sum 函数能够正确计算两个正数的和
   */
  it("should return the sum of two numbers", () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(0, -5)).toEqual(-5);
    expect(sum(10, 10)).toEqual(20);
  });

  /**
   * 测试用例: 验证 sum 函数能够正确计算两个负数的和
   */
  it("should return the sum of two negative numbers", () => {
    expect(sum(-2, -3)).toEqual(-5);
    expect(sum(-10, -10)).toEqual(-20);
  });
});
