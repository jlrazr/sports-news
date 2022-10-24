// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";

describe("HeroBanner", () => {
  test("test for shallowMount HeroBanner", () => {
    const wrapper = shallowMount(HeroBanner, {
      props: {
        hero: "hero-1.webp",
        alt: "Hero image",
      },
    });
    expect(wrapper.html()).toContain("PGD Sports News Center");
  });
});
