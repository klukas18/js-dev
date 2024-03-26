const http = require('http');

http
	.createServer(function (request, response) {
		response.writeHead(200, { 'Content-Type': 'text/plain' });

		if (request.method === 'GET') {
			response.write('Hello World from GET!');
		} else if (request.method === 'POST') {
			response.write('Hello World from POST!');
		} else {
			response.write('Hello World from OTHER HTTP METHOD!');
		}

		response.end();
	})
	.listen(4700, console.log('server started'));
