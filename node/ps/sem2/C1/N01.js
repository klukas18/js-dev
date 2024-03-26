const http = require('http');

http
	.createServer(function (request, response) {
		response.write('Hello World!');
		response.end();
	})
	.listen(4700, console.log('server started'));
