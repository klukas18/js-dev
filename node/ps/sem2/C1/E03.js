/* Rozszerzmy naszą aplikację z zadania 2 o dodatkowe działania matematyczne takie jak dodawanie, dzielenie i odejmowanie. Podzielmy zadania na odpowiednie ścieżki.

// http://localhost:4700/mnozenie/4/5
// http://localhost:4700/dzielenie/4/5
// http://localhost:4700/dodawanie/4/5
// http://localhost:4700/odejmowanie/4/5 */

const express = require('express');
const app = express();

function checkParams(request, response, next) {
	const { digit1, digit2 } = request.params;

	if (isNaN(digit1) || isNaN(digit2) || digit1 === ' ' || digit2 === ' ') {
		response.statusCode = 400; // bad request
		response.send(
			'Przynajmniej jeden z parametrów nie jest liczbą. Podaj liczby!'
		);
	} else {
		request.digit1 = Number(digit1);
		request.digit2 = Number(digit2);
		next();
	}
}

app.all('/multiply/:digit1/:digit2', checkParams, (request, response) => {
	const result = request.digit1 * request.digit2;
	response.send(`Wynikiem mnożenia jest: ${result}`);
});

app.all('/divide/:digit1/:digit2', checkParams, (request, response) => {
	if (request.digit2 === 0) {
		response.statusCode = 400; // bad request
		response.send('Nie można dzielić przez 0!');
	} else {
		const result = request.digit1 / request.digit2;
		response.send(`Wynikiem dzielenia jest: ${result}`);
	}
});

app.all('/add/:digit1/:digit2', checkParams, (request, response) => {
	const result = request.digit1 + request.digit2;
	response.send(`Wynikiem dodawania jest: ${result}`);
});

app.all('/subtract/:digit1/:digit2', checkParams, (request, response) => {
	const result = request.digit1 - request.digit2;
	response.send(`Wynikiem odejmowania jest: ${result}`);
});

app.listen(4700, console.log('server started!'));
