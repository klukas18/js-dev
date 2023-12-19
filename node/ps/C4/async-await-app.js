// 1. Wykorzystując składnię async stwórzmy funkcję zwracającą nasz pierwszy Promise i wyświetlmy na ekranie hello world!.

// const myFunc1 = async () => {
// 	return new Promise((resolve, reject) => {
// 		resolve('Hello world!');
// 	});
// };

// myFunc1().then((text) => {
// 	console.log(text);
// });

// 2. Stwórzmy aplikację która będzie posiadała funkcję asynchroniczną (async) dodawania 2 liczb. Jeżeli wynik będzie liczbą parzystą powinniśmy wyrzucić wyjątek i poinformować użytkownika o tym fakcie.

// const addFunc = async (a, b) => {
// 	const sum = a + b;
// 	if (sum % 2 === 0) {
// 		throw new Error('Wynik jest parzysty');
// 	}
// 	return sum;
// };

// addFunc(2, 4)
// 	.then((result) => console.log('Wynik ok:', result))
// 	.catch((error) => console.log('Error:', error.message));

// 3. Zmodyfikujmy nasze zadanie 2 tak aby zamiast .then..catch użyć await.

// const addFunc = async (a, b) => {
// 	const sum = a + b;
// 	if (sum % 2 === 0) {
// 		throw new Error('Wynik jest parzysty');
// 	}
// 	return sum;
// };

// (async () => {
// 	try {
// 		const result = await addFunc(2, 5);
// 		console.log('Wynik ok:', result);
// 	} catch (error) {
// 		console.log('Error:', error.message);
// 	}
// })();

// 4. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i pobierzmy użytkownika dane wykorzystując składnię async/await.

// const axios = require('axios');

// const getUser = async (id) => {
// 	const url = `https://jsonplaceholder.typicode.com/users/${id}`;
// 	const response = await axios.get(url);
// 	return response.data;
// };

// getUser(2)
// 	.then((user) => console.log(user.name))
// 	.catch((error) => console.log(error.message));

// 5. Dodajmy do naszgeo zadania 4 obsługę błędów try/catch.

// const axios = require('axios');

// const getUser = async (id) => {
// 	const url = `https://jsonplaceholder.typicode.com/users/${id}`;
// 	const response = await axios.get(url);
// 	return response.data;
// };

// (async () => {
// 	try {
// 		const user = await getUser(5);
// 		console.log(user.name);
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// })();

// 6. Dodajmy do naszej aplikacji z zadania 5 pobieranie pogody dla naszego użytkownika (z odpowiedzi weźmy main.temp i wyświetlmy na ekranie). Zadanie analogiczne jak w poprzednim laboratorium z wykorzystaniem składni async/await.

// const axios = require('axios');

// const getUser = async (id) => {
// 	const url = `https://jsonplaceholder.typicode.com/users/${id}`;
// 	const response = await axios.get(url);
// 	return response.data;
// };

// const getWeather = async (lat, lng) => {
// 	const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

// 	const response = await axios.get(url);
// 	return response.data;
// };

// (async () => {
// 	try {
// 		const user = await getUser(3);
// 		console.log(user.name);

// 		const weather = await getWeather(
// 			user.address.geo.lat,
// 			user.address.geo.lng
// 		);
// 		console.log(weather.main.temp);
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// })();

/* 7. Stwórzmy aplikację która pobierze informację o użytkowniku i statystykach jego postów i komentarzy.
        Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika oraz email.
        Pobierzmy wszystkie posty użytkownika i wyświetlmy ich ilość w konsoli.
        Dodatkowo sprawdźmy aktywność szukanego użytkownika w komentarzach i wyświetlmy łączną ilość komentarzy w konsoli. */

// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

// Endpoint do postów: https://jsonplaceholder.typicode.com/posts?userId=2

// Endpoint do komentarzy: https://jsonplaceholder.typicode.com/comments?postId=11

const axios = require('axios');

const getUser = async (id) => {
	const url = `https://jsonplaceholder.typicode.com/users/${id}`;
	const response = await axios.get(url);
	return response.data;
};

const getPosts = async (id) => {
	const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
	const response = await axios.get(url);
	return response.data;
};

const getComments = async (id) => {
	const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
	const response = await axios.get(url);
	return response.data;
};

(async () => {
	try {
		const user = await getUser(3);
		console.log(user.name);
		console.log(user.email);

		const posts = await getPosts(user.id);
		console.log(posts.length);

		const commentsPromise = posts.map((post) => getComments(post.id));
		const comments = await Promise.all(commentsPromise);

		commentsCount = comments.reduce((acc, comment) => acc + comment.length, 0);
		console.log('commentsCount:', commentsCount);
	} catch (error) {
		console.log(error.message);
	}
})();
