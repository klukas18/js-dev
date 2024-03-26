const http = require('http');

http
	.createServer(function (request, response) {
		response.writeHead(200, { 'Content-Type': 'text/plain' });

		if (request.url === '/users') {
			response.write('Hello World from users ulr!');
		} else if (request.url === '/comments') {
			response.write('Hello World from comments url!');
		} else {
			response.write('Hello World from other urls!');
		}

		response.end();
	})
	.listen(4700, console.log('server started'));
