// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import components for test
import SocialComp from "@/components/SocialComp/SocialComp.vue";

describe("SocialComp", () => {
  test("shallowMount component", () => {
    const wrapper = shallowMount(SocialComp, {});
    expect(wrapper.html()).toContain('class="fab fa-instagram"');
  });
});
