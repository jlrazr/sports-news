// imports
import { test, expect } from "@jest/globals";
import {
  getNews,
  getPlayers,
  getVideos,
  getNewsPost,
  postNews,
  updateViews,
} from "@/services/DataService";

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

const newsDataOnlyPostMock = [
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

const playersDataMock = [
  {
    id: "1",
    attributes: {
      playerName: "Andrea Jackson",
      playerPic: "player-1",
      position: "Forward",
      country: "England",
      dayOfBirth: "08 Oct 1998",
      social: {
        fb: "https://www.facebook.com",
        tw: "https://www.twitter.com",
        li: "https://www.linkedin.com",
        pi: "https://www.pinterest.com",
      },
    },
  },
];

const videosDataMock = [
  {
    id: "1",
    attributes: {
      url: "https://www.youtube.com/watch?v=85E6spD1OjQ",
      coverImage: "video-1",
      title: "Impossible Goals in Football 2021",
      copy: "Amazing Skills and Goals by The best Players. Tottenham fans: can we have a trophy for the best",
      views: "51",
      rating: "0",
    },
  },
];

describe("DataService", () => {
  test("getNews success", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(newsdataMock));
    const response = await getNews();
    expect(response[0].publishDate).toBe("13 June 2020");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getNews reject", () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    const response = async () => {
      await getNews();
    };
    expect(response()).rejects.toThrow(Error);
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getPlayers", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(playersDataMock));
    const response = await getPlayers();
    expect(response[0].id).toBe("1");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getPlayers reject", () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    const response = async () => {
      await getPlayers();
    };
    expect(response()).rejects.toThrow();
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getVideos", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(videosDataMock));
    const response = await getVideos();
    expect(response[0].title).toBe("Impossible Goals in Football 2021");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getVideos reject", () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    const response = async () => {
      await getVideos();
    };
    expect(response()).rejects.toThrow();
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getNews by id success", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(newsDataOnlyPostMock));
    const response = await getNewsPost(3);
    expect(response[0].attributes.publishDate).toBe("13 June 2020");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("getNews by id reject", () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    const response = async () => {
      await getNewsPost(3);
    };
    expect(response()).rejects.toThrow();
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("postNews with payload success", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(newsdataMock));
    const payload = {
      id: 10,
      title: "Test title",
      author: "Autenticated user",
      publishDate: "12/09/2022",
      hits: 0,
      body: "text example for test pouposes",
      image: "article-1",
      category: null,
      url: "#/news/10",
    };
    const response = await postNews(payload);
    expect(response.data[0].attributes.publishDate).toBe("13 June 2020");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("postNews with payload reject", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    const payload = {
      id: 10,
      title: "Test title",
      author: "Autenticated user",
      publishDate: "12/09/2022",
      hits: 0,
      body: "text example for test pouposes",
      image: "article-1",
      category: null,
      url: "#/news/10",
    };
    const response = async () => {
      await postNews(payload);
    };
    expect(response()).rejects.toThrow();
    global.fetch.mockClear();
    delete global.fetch;
  });
  test("updateViews with payload success", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(newsdataMock));
    const payload = {
      id: 10,
      title: "Test title",
      author: "Autenticated user",
      publishDate: "12/09/2022",
      hits: 0,
      body: "text example for test pouposes",
      image: "article-1",
      category: null,
      url: "#/news/10",
    };
    const response = await updateViews(5, payload);
    expect(response[0].attributes.publishDate).toBe("13 June 2020");
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("postNews with payload reject", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStubFail());
    const payload = {
      id: 10,
      title: "Test title",
      author: "Autenticated user",
      publishDate: "12/09/2022",
      hits: 0,
      body: "text example for test pouposes",
      image: "article-1",
      category: null,
      url: "#/news/10",
    };
    const response = async () => {
      await updateViews(5, payload);
    };
    expect(response()).rejects.toThrow();
    global.fetch.mockClear();
    delete global.fetch;
  });
});
