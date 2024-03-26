const express = require('express');
const app = express();

/*
app.all('*', (request, response) => {
	// obsługa takiego adresu: http://localhost:4700?name=Jan
	if (request.query.name) {
		response.send(`Hello ${request.query.name}!`);
	} else {
		response.send('Hello World from Express!');
	}
});
*/

// https://localhost:4700/name/Jan

app.all('/name/:name?', (request, response) => {
	if (request.params.name) {
		response.send(`Hello ${request.params.name}!`);
	} else {
		response.send(`Hello World from express!`);
	}
});

app.listen(4700, console.log('server started!'));
