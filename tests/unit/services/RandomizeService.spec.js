// imports
import { test, expect } from "@jest/globals";
import randomize from "@/services/RandomizeService";

describe("RandomizeService", () => {
  test("test for randomize", async () => {
    const response = randomize([0, 1, 2, 3, 4], 1);
    expect(response[0]).toBeLessThan(5);
  });
});
