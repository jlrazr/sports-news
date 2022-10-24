// imports
import { mount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import { nextTick } from "vue";
import { RouterLinkStub } from "@vue/test-utils";
// import component
import MainNav from "@/components/MainNav/MainNav.vue";
import { routes } from "@/router";
import { createRouter, createWebHistory } from "vue-router";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

describe("MainNav", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  test("test for shallowMount MainNav not login", async () => {
    const wrapper = mount(MainNav, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      global: {
        mocks: {
          $authService: {
            loggedIn: () => false,
          },
        },
        plugins: [router],
      },
    });
    expect(wrapper.html()).toContain("LOGIN");
  });

  test("test for shallowMount MainNav watch login", async () => {
    router.push("/create-post");
    await router.isReady();
    const wrapper = mount(MainNav, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      global: {
        mocks: {
          $authService: {
            loggedIn: () => true,
          },
        },
        plugins: [router],
        components: {
          Carousel,
          Slide,
          Pagination,
          Navigation,
        },
      },
    });
    wrapper.setData({
      isActive: true,
      autorized: true,
    });

    await nextTick();
    expect(wrapper.html()).toContain("CREATEPOST");
  });
});
