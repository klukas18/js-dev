// 1. Stworzeniem funkcji zwracającej Promise której rozwiązaniem ma być wartość hello world.

// const helloPromise = new Promise((resolve, reject) => {
// 	resolve('Hello world');
// });

// helloPromise.then((text) => {
// 	console.log(text);
// });

// 2. Modyfikacja zadania 1 tak, aby rozwiązanie Promise było asynchroniczne, z użyciem funkcji setTimeout z 5 sekundowym opóźnieniem.

// console.log('start');
// const helloPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Hello world');
// 	}, 5000);
// });

// helloPromise.then((text) => {
// 	console.log(text);
// });
// console.log('finish');

// 3. Stworzenie funkcji odejmowania 2 liczb z wykorzystaniem Promise. Jeżeli wynik działania będzie ujemny Promise powinien zwrócić błąd, jeżeli wynik będzie dodatni Promise powinien się rozwiązać poprawnie przekazując wynik działania.

// const sub = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		if (a - b < 0) {
// 			reject('Wynik jest ujemny');
// 		} else {
// 			resolve(a - b);
// 		}
// 	});
// };

// sub(10, 5)
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// 4. Pobranie danych użytkownika z adresu (https://jsonplaceholder.typicode.com/users/{id}) przy użyciu zewnętrznej biblioteki request. Należy przerobić wywołanie zapytania aby wykorzystywało Promise.

// 5. Dodanie do aplikacji z zadania 4 pobierania pogody dla naszego użytkownika. Analogicznie jak w zadaniu 4.
// Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}

// const request = require('request');

// const getUser = (id) => {
// 	const url = `https://jsonplaceholder.typicode.com/users/${id}`;

// 	return new Promise((resolve, reject) => {
// 		request(url, (error, response, body) => {
// 			if (error) {
// 				reject('Błąd komunikacji z serwerem.', error);
// 			} else if (response.statusCode !== 200) {
// 				reject('Błąd pobierania użytkownika.', response.statusCode);
// 			} else {
// 				const user = JSON.parse(body);
// 				resolve(user);
// 			}
// 		});
// 	});
// };

// const getWeather = (lat, lng) => {
// 	const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

// 	return new Promise((resolve, reject) => {
// 		request(url, (error, response, body) => {
// 			if (error) {
// 				reject('Błąd komunikacji z serwerem pogody.', error);
// 			} else if (response.statusCode !== 200) {
// 				reject('Błąd pobierania pogody.', response.statusCode);
// 			} else {
// 				const weather = JSON.parse(body);
// 				resolve(weather);
// 			}
// 		});
// 	});
// };

// getUser(5)
// 	.then((user) => {
// 		console.log('Nazwa użytkownika:', user.name);

// 		const lat = user.address.geo.lat;
// 		const lng = user.address.geo.lng;

// 		return getWeather(lat, lng);
// 	})
// 	.then((weather) => {
// 		console.log(weather.weather[0].description);
// 	})
// 	.catch((error) => {
// 		console.log('Błąd:', error);
// 	});

// 6. Modyfikacja zadania 4 tak, aby pobrać kilku użytkowników w tej samej chwili wykorzystując Promise.all(). Wyświetlenie ich imion w konsoli. (id użytkowników: 2, 5, 7). Dodatkowo wyświetlenie informacji, że Promise został w pełni zakończony.

const request = require('request');

const getUser = (id) => {
	const url = `https://jsonplaceholder.typicode.com/users/${id}`;

	return new Promise((resolve, reject) => {
		request(url, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				const user = JSON.parse(body);
				resolve(user);
			} else {
				reject('Użytkownika nie znaleziono.');
			}
		});
	});
};

const ids = [2, 5, 7];

const userPromises = ids.map((id) => getUser(id));

Promise.all(userPromises)
	.then((users) => {
		users.forEach((user) => {
			console.log(user.name);
		});
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log('Promise został zakończony.');
	});
