const express = require('express');
const router = express.Router();

let users = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'test@test.de',
	},
];

//dodawanie nowego użytkownika
router.post('/add', (request, response) => {
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
router.get('/', (request, response) => {
	response.json(users);
	console.log('Wyświetlono wszystkich użytkowników!');
});

// wyświetlanie pojedynczego użytkownia
router.get('/:userId', (request, response) => {
	const { userId } = request.params;
	const user = users.find((u) => u.id === Number(userId));

	if (!user) {
		response.status(404).send('Użytkownika nie znaleziono!');
	} else {
		response.format({
			'application/json': function () {
				response.json(user);
			},

			'application/xml': function () {
				let userXml = `<user><id>${user.id}</id><firstName>${user.firstName}</firstName><lastName>${user.lastName}</lastName><email>${user.email}</email></user>`;
				response.type('application/xml');
				response.send(userXml);
			},

			'text/plain': function () {
				response.send(`${user.firstName} ${user.lastName}`);
			},

			default: function () {
				// log the request and respond with 406
				response.status(406).send('Not Acceptable');
			},
		});

		console.log(`Wyświetlono użytkownika o id:${userId}`);
	}
});

// usuwanie użytkownika
router.delete('/:userId', (request, response) => {
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

module.exports = router;
