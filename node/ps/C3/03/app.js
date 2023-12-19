// 3. Aplikacja która pobierze z zewnętrznego API informację o użytkowniku i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.

// Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie ID to identyfikator użytkownika (wybrana liczba od 1 do 10 włącznie).

// Np: Adres URL dla użytkownika o ID=2: https://jsonplaceholder.typicode.com/users/2

// Wynik w konsoli

// Ervin Howell
// lat -43.9509
// lng -34.4618
// W zadaniach 3-9, do pobieranie danych z API, wykorzystamy zewnętrzny moduł request. Moduł jest przestarzały ale to nie będzie nam przeszkadzać w zajęciach.

// Dokumentacja: https://github.com/request/request#readme

// Strona: https://www.npmjs.com/package/request

// 4. Rozszerzenie zadania 3 tak aby aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie.

// 5. Dodajmy do zadania 4 dynamiczne wprowadzanie ID poprzez użycie zewnętrznej biblioteki yargs.

// 6.Dodanie do zadanie 5 opcji pobrania pogody dla wczytanego użytkownika. Odpowiednie zabezpieczenie naszej aplikacji w przypadku błędu API (podobnie jak w zadaniu 5).

// Adres do pobrania danych:

// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}

// gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika

const request = require("request");
const yargs = require("yargs");

const userId = yargs.argv.Id;

function getWeather(user) {
  const lat = user.address.geo.lat;
  const lng = user.address.geo.lng;

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

  request(weatherUrl, (error, response, body) => {
    if (error) {
      console.log("network error", error);
    } else if (response.statusCode !== 200) {
      console.log("there's a problem with fetching weather data");
    } else {
      const weatherData = JSON.parse(body);
      console.log(weatherData.weather[0].description);
    }
  });
}

function getUser(id, callback) {
  const API_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  request(API_URL, (error, response, body) => {
    if (error) {
      console.log("network error", error);
    } else if (response.statusCode !== 200) {
      console.log("there's a problem with fetching user data");
    } else {
      const user = JSON.parse(body);
      console.log(user.name);

      callback(user);
    }
  });
}

getUser(userId, getWeather);
