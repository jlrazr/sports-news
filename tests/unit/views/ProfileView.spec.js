/* eslint-disable no-unused-vars */
// imports
import { shallowMount } from "@vue/test-utils";
import { test, expect } from "@jest/globals";
import { nextTick } from "vue";
// import component to test
import ProfileView from "@/views/ProfileView.vue";

describe("ProfileView.vue", () => {
  test("renders Profile when login", async () => {
    const wrapper = shallowMount(ProfileView, {
      global: {
        mocks: {
          $route: {
            query: {
              id: 20,
              access_token: "acces-route-token",
            },
          },
          $authService: {
            loggedIn: () => false,
            validateUser: (token) => {
              return {
                jwt: "token-test",
                user: {
                  email: "test@email.com",
                  validated: false,
                  picture: "",
                },
              };
            },
            setProfile: (data) => {},
            setToken: (token) => {},
          },
        },
      },
    });
    await nextTick();
    expect(await wrapper.componentVM.userData.email).toBe("test@email.com");
  });

  test("renders Profile with data from profile", async () => {
    const wrapper = shallowMount(ProfileView, {
      global: {
        mocks: {
          $route: {
            query: {
              id: 20,
              access_token: "acces-route-token",
            },
          },
          $authService: {
            loggedIn: () => true,
            getProfile: () => ({
              email: "test@email.com",
              validated: false,
              picture: "",
            }),
          },
        },
      },
    });
    await nextTick();
    expect(await wrapper.componentVM.userData.email).toBe("test@email.com");
  });

  test("test for Profile logout", async () => {
    let logOutState = false;
    const wrapper = shallowMount(ProfileView, {
      global: {
        mocks: {
          $route: {
            query: {
              id: 20,
              access_token: "acces-route-token",
            },
          },
          $router: {
            push: (path) => {},
          },
          $authService: {
            loggedIn: () => true,
            getProfile: () => ({
              email: "test@email.com",
              validated: false,
              picture: "",
            }),
            logout: () => {
              logOutState = true;
            },
          },
        },
      },
    });
    await nextTick();
    await wrapper.find("#logout").trigger("click");
    expect(logOutState).toBeTruthy();
  });
});
