export default class AuthService {
  /**
   * Options for GET Methods
   */
  options = {
    method: "get",
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
    },
  };
  constructor() {}

  // The rest of the functions below are helper functions that we borrow from the seed project.
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token;
  }

  setProfile(profile) {
    if (Object.keys(profile).length === 0)
      throw new Error("profile is undefined");
    // Saves profile data to localStorage
    localStorage.setItem("profile", JSON.stringify(profile));
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem("profile");
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("profile");
  }

  async validateUser(token) {
    let url = `http://localhost:1337/api/auth/auth0/callback?access_token=${token}`;
    try {
      const response = await fetch(url, this.options);
      const data = await response.json();
      return data;
    } catch (error) {
      return new Error(error);
    }
  }
}
