// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import FooterComp from "@/components/FooterComp/FooterComp.vue";
import SocialComp from "@/components/SocialComp/SocialComp.vue";

describe("FooterComp", () => {
  test("test for shallowMount FooterComp", () => {
    const wrapper = shallowMount(FooterComp, {
      components: {
        SocialComp,
      },
    });
    expect(wrapper.html()).toContain("social-comp-stub");
  });
});
