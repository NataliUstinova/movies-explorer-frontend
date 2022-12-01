class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getAllMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkServerResponse);
  }

  // searchAllMovies(query) {
  //   return fetch(`${this._baseUrl}/beatfilm-movies?query=${query}`, {
  //     method: "GET",
  //     headers: this._headers,
  //   }).then(this._checkServerResponse);
  // }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});
