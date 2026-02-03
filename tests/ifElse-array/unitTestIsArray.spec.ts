import { describe } from "node:test";
import { test, expect } from "@playwright/test";

export function isArray(array: unknown): boolean {
  return Array.isArray(array);
}
console.log(isArray([1, 2, 3]));
console.log(isArray("apple", "banana", "cherry"));

describe("isArray", () => {
  test("should return true for an array", () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });
  test("should return true for an empty array", () => {
    expect(isArray([])).toBe(true);
  });
  test("should return false for a string", () => {
    expect(isArray("apple")).toBe(false);
  });
  test("should return false for a number", () => {
    expect(isArray(123)).toBe(false);
  });
  test("should return false for an object", () => {
    expect(isArray({ a: 1 })).toBe(false);
  });
  test("should return false for null", () => {
    expect(isArray(null)).toBe(false);
  });
  test("should return false for undefined", () => {
    expect(isArray(undefined)).toBe(false);
  });
});
