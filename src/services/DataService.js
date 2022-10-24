// services
import AuthService from "@/services/AutService";
const auth = new AuthService();

/**
 * Options for GET Methods
 */
const options = {
  method: "get",
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
  },
};

/**
 * Function respoinsible for create the configuration object for POST Method
 * @param {*} payload Object wit the data to be sent to the server
 * @returns Object with the confirguration for the request
 */
const postOptions = (payload) => ({
  method: "post",
  headers: {
    Authorization: `Bearer ${auth.getToken()}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const putOptions = (payload) => ({
  method: "put",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

/**
 * Function responsible for get the data of all the news
 * @returns Async funtion with the response data
 */
export async function getNews() {
  let url = "http://localhost:1337/api/news";
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data.map((item) => {
      return (item = { ...item.attributes, id: item.id });
    });
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function responsible for get the data of a post news
 * @param {*} id String identefier of the news
 * @returns Async funtion with the response data
 */
export async function getNewsPost(id) {
  let url = `http://localhost:1337/api/news/${id}`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const post = { ...data.data };

    return post;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function responsible for get the data of players
 * @returns Async funtion with the response data
 */
export async function getPlayers() {
  let url = "http://localhost:1337/api/players";
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data.map((item) => {
      return { ...item.attributes, id: item.id };
    });
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function responsible for get the data of videos
 * @returns Async funtion with the response data
 */
export async function getVideos() {
  let url = "http://localhost:1337/api/videos";
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data.map((item) => {
      return { ...item.attributes, id: item.id };
    });
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function responsible for sent the new news to the server
 * @param {*} payload Object data to be setted
 * @returns Async funtion with the response data
 */
export async function postNews(payload) {
  try {
    const rawResponse = await fetch(
      "http://localhost:1337/api/news",
      postOptions({ data: payload })
    );
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateViews(id, payload) {
  let url = `http://localhost:1337/api/videos/${id}`;
  try {
    const response = await fetch(url, putOptions(payload));
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
