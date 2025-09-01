import { describe, it, expect } from "vitest";
import { sampleFunction } from "@/index.js";

describe("sampleFunction test", () => {
  it("should return the correct value", () => {
    expect(sampleFunction(2, 3)).toBe(5);
  });
});
