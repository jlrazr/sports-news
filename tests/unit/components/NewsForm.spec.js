// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import components for test
import AddInformation from "@/components/NewsForm/NewsForm.vue";
// import childs components
import { postNews } from "@/services/DataService";
import getDate from "@/services/GetDate";
import Editor from "@toast-ui/editor";

jest.mock("@toast-ui/editor");

describe("AddInformation", () => {
  test("test for mount AddInformation", () => {
    const wrapper = shallowMount(AddInformation, {
      components: {
        postNews,
        getDate,
        Editor,
      },
    });
    expect(wrapper.html()).toContain("Create a new post");
  });
});
