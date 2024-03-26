/* Stwórzmy aplikację która pobierając 2 parametry a i b z adresu url (http://localhost:4700/2/3) wykona mnożenie. Rezultat działania powinniśmy wysłać do klienta. */

const express = require('express');
const app = express();

app.all('/:digit1/:digit2', (request, response) => {
	const { digit1, digit2 } = request.params;

	if (isNaN(digit1) || isNaN(digit2)) {
		response.statusCode = 400; // bad request

		// komunikat błedu mozna zwrocic w ten sposob, ale nie jest to powszechna praktyka
		// response.statusMessage(
		// 	'Przynajmniej jeden z parametrów nie jest liczbą. Podaj liczby!'
		// );
		response.send(
			'Przynajmniej jeden z parametrów nie jest liczbą. Podaj liczby!'
		);
	} else {
		const result = digit1 * digit2;
		response.send(`Wynikiem mnożenia jest: ${result}`);
	}
});

app.listen(4700, console.log('server started!'));
