class MainApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  getSavedMovies() {
    return fetch(this.baseUrl + "/movies", {
      method: "GET",
      headers: this.headers,
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось загрузить данные сохранённых фильмов, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }

  savedMovie(data) {
    return fetch(this.baseUrl + "/movies", {
      method: "POST",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify({
        ...data,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось отправить данные карточки на сервер, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }

  deleteMovie(id) {
    return fetch(this.baseUrl + `/movies/${id}`, {
      method: "DELETE",
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          console.log("Карточка удалена!");
        } else {
          return Promise.reject(
            `Ошибка: не удалось удалить карточку на сервере, статус ${res.status}`
          );
        }
      })
      .catch((err) => alert(err));
  }
}

const mainApi = new MainApi({
  // baseUrl: "http://localhost:3001",
  baseUrl: "https://api.kulakov.students.nomoredomains.monster",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
