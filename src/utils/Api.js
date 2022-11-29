class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  signup(email, password) {
    return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, email: email }),
    }).then(this._checkServerResponse);
  }

  signin(email, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, email: email }),
    }).then(this._checkServerResponse);
  }

  signout() {
    return fetch(`${BASE_URL}/signout`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(this._checkServerResponse);
  }

  getAllMovies() {
    return fetch(`${BASE_URL}/movies`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

export const api = new Api({
  // baseUrl: "https://api.movies.nata.u.nomoredomains.club",
  baseUrl: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});
