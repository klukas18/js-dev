/*   Wzorując się na zadaniu 4 stwórzmy analogicznie obsługę tablicy zawierającej posty. Tym razem aby dodać post obsłużymy metodę POST i dane przesyłane w body żądania. Aplikacja ma rozszerzyć naszą już istniejącą aplikację z zadania 4.

Struktura body POSTu:

{
    title: '',
    body: ''
}

*/

const express = require('express');
const app = express();

app.use(express.json()); // middleware pozwalajacy na parsowanie JSONa

let users = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'test@test.de',
	},
];

let posts = [
	{
		title: '',
		body: '',
	},
];

//dodawanie nowego użytkownika
app.post('/users/add', (request, response) => {
	const { name, username, email } = request.query;
	const newUser = {
		id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
		firstName: name,
		lastName: username,
		email: email,
	};
	users.push(newUser);
	response.status(201).json(newUser);
	console.log('Dodano nowego użytkownika!');
});

//dodawanie nowego postu
app.post('/posts/add', (request, response) => {
	const { title, body } = request.body;
	const newPost = {
		title,
		body,
	};
	posts.push(newPost);
	response.status(201).json(newPost);
	console.log('Dodano nowy post!');
});

// zwracanie wszystkich użytkowników
app.get('/users', (request, response) => {
	response.json(users);
	console.log('Wyświetlono wszystkich użytkowników!');
});

// zwracanie wszystkich postów
app.get('/posts', (request, response) => {
	response.json(posts);
	console.log('Wyświetlono wszystkie posty!');
});

// wyświetlanie pojedynczego użytkownia
app.get('/users/:userId', (request, response) => {
	const { userId } = request.params;
	const user = users.find((u) => u.id === Number(userId));

	if (!user) {
		response.status(404).send('Użytkownika nie znaleziono!');
	} else {
		response.json(user);
		console.log(`Wyświetlono użytkownika o id:${userId}`);
	}
});

// wyświetlanie pojedynczego postu
app.get('/posts/:index', (request, response) => {
	const index = Number(request.params.index) - 1;
	const post = posts[index];

	if (!post) {
		response.status(404).send('Nie znaleziono postu o tym numerze!');
	} else {
		response.json(post);
		console.log(`Wyświetlono post o numerze: ${index + 1}`);
	}
});

// usuwanie użytkownika
app.delete('/users/:userId', (request, response) => {
	const { userId } = request.params;
	const userIndex = users.findIndex((u) => u.id === Number(userId));

	if (userIndex === -1) {
		response.status(404).send('Użytkownika nie znaleziono!');
	} else {
		users.splice(userIndex, 1);
		response.status(204).send();
		console.log(`Usunięto użytkownika o id:${userId}`);
	}
});

// usuwanie postu
app.delete('/posts/:index', (request, response) => {
	const index = Number(request.params.index) - 1;
	if (index < 0 || index >= posts.length) {
		response.status(404).send('Nie znaleziono postu o tym numerze!');
	} else {
		const deletedPost = posts.splice(index, 1);
		response.status(200).json(deletedPost);
		console.log(`Usunięto post o numerze: ${index + 1}`);
	}
});

app.listen(4700, console.log('server started!'));
