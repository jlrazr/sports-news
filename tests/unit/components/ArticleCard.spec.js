// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";

describe("ArticleCard", () => {
  test("test for shallowMount ArticleCrad", () => {
    const wrapper = shallowMount(ArticleCard, {
      props: {
        title: "My test",
        uthor: "admin",
        publishDate: "10/12/2022",
        hits: "10",
        body: "Test body",
        image: "article-1",
        category: "uncategorized",
        url: "#",
      },
    });
    expect(wrapper.componentVM.hits).toBe("10");
  });
});
