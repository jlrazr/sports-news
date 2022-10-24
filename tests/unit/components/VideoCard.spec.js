// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import component
import VideoCard from "@/components/VideoCard/VideoCard.vue";

describe("VideoCard", () => {
  test("test for shallowMount VideoCard", async () => {
    const wrapper = shallowMount(VideoCard, {
      global: {
        plugins: [],
      },
      props: {
        url: "#",
        coverImg: "video-2",
        title: "The video test",
        copy: "lorem ipsun text for test",
        views: 10,
        rating: "10",
        altText: "this is an alt text",
      },
    });
    expect(wrapper.html()).toContain("The video test");
  });
});
