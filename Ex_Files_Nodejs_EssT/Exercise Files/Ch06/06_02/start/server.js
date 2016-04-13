var http = require("http");

var server = http.createServer(function(request, response){
	/*
	// Response Plain Text
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.end("Hello World");
	*/

	// Response HTML text
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text </h1>
				<p>${request.url}</p>
				<p>${request.method}</p>
			</body>
		</html>`);
});

server.listen(3000);

global.console.log("Server is running. Listening at port 3000.");