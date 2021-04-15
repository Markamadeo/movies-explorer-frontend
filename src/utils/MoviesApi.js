class MoviesApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  getMovies() {
    return fetch(this.baseUrl, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
      );
    });
  }
}

const beatFilmApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default beatFilmApi;
