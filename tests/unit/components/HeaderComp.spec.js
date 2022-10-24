// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import components for test
import HeaderComp from "@/components/HeaderComp/HeaderComp.vue";
// import childs
import MainNav from "@/components/MainNav/MainNav.vue";

describe("HeaderComp", () => {
  test("test for shallowMount HeaderComp", () => {
    const wrapper = shallowMount(HeaderComp, {
      components: {
        MainNav,
      },
    });
    expect(wrapper.html()).toContain('alt="PGD Sport News"');
  });
});
