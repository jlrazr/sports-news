// imports
import { test, expect } from "@jest/globals";
import AuthService from "@/services/AutService";

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

function setupFetchStubFail() {
  return function fetchStub() {
    return new Promise((resolve, reject) => {
      reject(new Error("Fail"));
    });
  };
}

// mocking data
const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const mockProfile = {
  user: {
    email: "admin@strapi.io",
    id: 1,
    username: "admin",
  },
};

const mockResponseValidation = {
  jwt: mockToken,
  user: {
    email: "admin@strapi.io",
    id: 1,
    username: "admin",
  },
};

describe("AuthService", () => {
  // class definition
  const auth = new AuthService();
  test("test for loggedIn not login", () => {
    expect(auth.loggedIn()).toBe(false);
  });

  test("test for loggedIn login", () => {
    auth.setToken(mockToken);
    expect(auth.loggedIn()).toBe(true);
  });

  test("test for setProfile success", () => {
    auth.setProfile(mockProfile);
    expect(auth.getProfile().user.email).toBe("admin@strapi.io");
  });

  test("test for setProfile fail", () => {
    expect(() => {
      auth.setProfile({});
    }).toThrow();
  });

  test("test for logout", () => {
    auth.logout();
    expect(auth.getProfile()).toStrictEqual({});
  });

  test("test for user validation ", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(mockResponseValidation));
    const response = await auth.validateUser(mockToken);
    expect(response.data.user.username).toBe("admin");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("test for user validation fail", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    try {
      auth.validateUser(mockToken);
    } catch (error) {
      expect(error).toBe("Error: Fail");
    }
    global.fetch.mockClear();
    delete global.fetch;
  });
});
