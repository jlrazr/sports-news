// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import { RouterLinkStub } from "@vue/test-utils";
// import components for test
import NotFound from "@/views/NotFound.vue";
import { routes } from "@/router";
import { createRouter, createWebHistory } from "vue-router";

describe("NotFound", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  test("shallowMount component", () => {
    const wrapper = shallowMount(NotFound, {
      global: {
        plugins: [router],
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.html()).toContain("Page not found :");
  });
});
