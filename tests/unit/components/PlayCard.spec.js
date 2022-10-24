// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
// import component
import PlayerCard from "@/components/PlayerCard/PlayerCard.vue";

describe("PlayerCard", () => {
  test("test for shallowMount PlayerCard", async () => {
    const wrapper = shallowMount(PlayerCard, {
      global: {
        plugins: [],
      },
      props: {
        name: "Name Example",
        picture: "player-1",
        position: "position test",
        country: "country test",
        dob: "",
        social: [
          {
            icon: "facebook",
            url: "#",
          },
          {
            icon: "linkedin",
            url: "#",
          },
          {
            icon: "pinterest",
            url: "#",
          },
        ],
      },
    });
    expect(wrapper.html()).toContain("Name Example");
  });
});
