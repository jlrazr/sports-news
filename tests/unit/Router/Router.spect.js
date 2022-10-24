import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import App from "@/App.vue";
// import About component
import NotFound from "@/views/NotFound.vue";
// import About component
import PostView from "@/views/PostView.vue";

describe("App", () => {
  it("renders a component via routing", async () => {
    // create a local router
    // with '/about' route
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: NotFound,
        },
        {
          path: "/posts/:id",
          name: "post",
          component: PostView,
        },
      ],
    });

    // navigate to route
    router.push("/posts/1");

    // mount the App
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    await router.isReady();

    console.log(wrapper.html());

    // if the About route exists
    // the routing was successful
    expect(wrapper.findComponent(PostView).exists()).toBe(true);
  });
});
