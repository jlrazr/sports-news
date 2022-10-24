// imports
import { test, expect } from "@jest/globals";
import getDate from "@/services/GetDate";

describe("GetDate", () => {
  test("test for getDate", async () => {
    const response = getDate();
    expect(response).toBeTruthy();
  });
});
