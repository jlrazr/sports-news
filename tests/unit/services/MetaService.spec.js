// imports
import { test, expect } from "@jest/globals";
import generateMetaDesc from "@/services/MetaService";

describe("MetaService", () => {
  test("test for generateMetaDesc", async () => {
    const descriptionEle = document.createElement("meta");
    descriptionEle.setAttribute("name", "description");
    const head = document.createElement("head");
    const spyQuery = jest
      .spyOn(document, "querySelector")
      .mockImplementation((selector) => {
        switch (selector) {
          case "head":
            return head;
          case "meta[name='description']":
            return head;
          default:
            break;
        }
      });
    generateMetaDesc("my description");
    expect(spyQuery).toHaveBeenCalled();
  });

  test("test for generateMetaDesc branch", async () => {
    const head = document.createElement("head");
    const spyQuery = jest
      .spyOn(document, "querySelector")
      .mockImplementation((selector) => {
        switch (selector) {
          case "head":
            return head;
          default:
            break;
        }
      });
    generateMetaDesc("my description");
    expect(spyQuery).toHaveBeenCalled();
  });
});
