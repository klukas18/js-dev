/* 4. Pobranie danych użytkownika z adresu (https://jsonplaceholder.typicode.com/users/{id}) przy użyciu zewnętrznej biblioteki request. Należy przerobić wywołanie zapytania aby wykorzystywało Promise.
 const getUser = (id) => {
     ... // <- implementacja Promise
 }

 getUser(2)
     .then(...)
     .catch(...); */

/* 5. Dodanie do aplikacji z zadania 4 pobierania pogody dla naszego użytkownika. Analogicznie jak w zadaniu 4. */

const request = require("request");

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject("Błąd komunikacji z serwerem", error);
      } else if (response.statusCode !== 200) {
        reject("Błąd pobierania użytkownika", response.statusCode);
      } else {
        const user = JSON.parse(body);
        resolve(user);
      }
    });
  });
};

const getWeather = (lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject("Błąd komunikacji z serwerem pogody", error);
      } else if (response.statusCode !== 200) {
        reject("Błąd pobierania pogody", response.statusCode);
      } else {
        const weather = JSON.parse(body);
        resolve(weather);
      }
    });
  });
};

getUser(2)
  .then((user) => {
    console.log("Nazwa użytkownika:", user.name);

    const lat = user.address.geo.lat;
    const lng = user.address.geo.lng;

    return getWeather(lat, lng);
  })
  .then((weather) => {
    console.log(weather.weather[0].description);
  })
  .catch((error) => console.log("Błąd:", error));
