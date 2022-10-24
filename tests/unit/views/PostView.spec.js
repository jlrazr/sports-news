// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import { nextTick } from "vue";
// import components for test
import PostView from "@/views/PostView.vue";

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

describe("PostView", () => {
  test("shallowMount component", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(newsdataMock));
    jest.spyOn(PostView, "beforeCreate").mockImplementation(() => {});

    const wrapper = shallowMount(PostView, {
      global: {
        mocks: {
          $route: {
            params: {
              id: 10,
            },
          },
        },
      },
    });
    wrapper.setData({
      postData: newsdataMock[0].attributes,
    });
    await nextTick();
    expect(wrapper.html()).toContain(
      "Initiation Songs Famous Mates Meeting Mat's Mum And More"
    );
  });
});
