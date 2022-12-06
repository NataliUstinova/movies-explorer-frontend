class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async _checkServerResponse(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result.message);
  }

  //user
  signup({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name: name, email: email, password: password }),
    }).then(this._checkServerResponse);
  }

  signin({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ email: email, password: password }),
    }).then(this._checkServerResponse);
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkServerResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkServerResponse);
  }

  editProfile({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkServerResponse);
  }

  //movies
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkServerResponse);
  }

  saveUserMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._checkServerResponse);
  }

  deleteSavedMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkServerResponse);
  }
}

export const mainApi = new MainApi({
  // baseUrl: "https://api.movies.nata.u.nomoredomains.club",
  baseUrl: "http://localhost:3002",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
