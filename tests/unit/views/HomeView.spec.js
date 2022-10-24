// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import { nextTick } from "vue";
// import components for test
import HomeView from "@/views/HomeView.vue";
// child components
import HeroBanner from "@/components/HeroBanner/HeroBanner.vue";
import VideoCard from "@/components/VideoCard/VideoCard.vue";
import PlayerCard from "@/components/PlayerCard/PlayerCard.vue";
import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import SectionComp from "@/components/SectionComp/SectionComp.vue";

// mock fetch functions
function setupFetchStub(data) {
  return function fetchStub() {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    });
  };
}

// mocking data
const newsdataMock = [
  {
    id: "3",
    attributes: {
      title: "Initiation Songs Famous Mates Meeting Mat's Mum And More",
      author: "Super User",
      publishDate: "13 June 2020",
      hits: "221",
      body: "Consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunta ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minimatis veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet. Mirum est notare quam littera gothica, quam nunc putamus parum claram. Lorem ipsum dolor sit amet consectuer adipiscing elit sedet diames nonumiere nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisine enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto. Lorem ipsum dolor sit amet magna aliquam erat volutpat. Ut wisine enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.",
      image: "article-3",
      category: "Featured News",
      url: "#",
    },
  },
];

describe("HomeView", () => {
  test("shallowMount component", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(newsdataMock));
    jest.spyOn(HomeView, "beforeCreate").mockImplementation(() => {});

    const wrapper = shallowMount(HomeView, {
      global: {
        mocks: {
          $route: {
            params: {
              id: 10,
            },
          },
        },
      },
      components: {
        HeroBanner,
        VideoCard,
        PlayerCard,
        ArticleCard,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        SectionComp,
      },
    });
    wrapper.setData({
      featuredNews: newsdataMock,
      featuredVideos: newsdataMock,
      featuredPlayers: newsdataMock,
    });
    await nextTick();
    expect(wrapper.html()).toContain("hero-banner-stub");
  });
});
