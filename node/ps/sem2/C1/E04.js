/*   Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

 - 'końcówka' /add niech służy do dodawania użytkownika i przyjmuje parametry ?name=Jan&username=janko&email=jan@nowak.abc
- dodajmy ścieżkę zwracającą wszystkich użytkowników
- dodajmy końcówkę która wyświetla dane pojedynczego użytkownika na podstawie parametru id wysłanego przez klienta
- rozszerzmy aplikację o kasowanie użytkownika */

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

// zwracanie wszystkich użytkowników
app.get('/users', (request, response) => {
	response.json(users);
	console.log('Wyświetlono wszystkich użytkowników!');
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

app.listen(4700, console.log('server started!'));
