// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import components for test
import CreatePostView from "@/views/CreatePostView.vue";
// import required components
import NewsForm from "@/components/NewsForm/NewsForm.vue";

describe("CreatePostView", () => {
  test("shallowMount component", () => {
    const wrapper = shallowMount(CreatePostView, {
      components: {
        NewsForm,
      },
    });
    expect(wrapper.html()).toContain("news-form-stub");
  });
});
