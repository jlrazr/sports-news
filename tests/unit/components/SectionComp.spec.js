// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import component to test
import SectionCompVue from "@/components/SectionComp/SectionComp.vue";

describe("SectionCompVue", () => {
  test("render comoponent", () => {
    const wrapper = shallowMount(SectionCompVue, {
      props: {
        title: "Section test",
      },
    });
    expect(wrapper.html()).toContain("Section test");
  });
});
