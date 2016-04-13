var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(request, response){
	console.log(`${request.method} request for ${request.url}`);

	if(request.url === '/'){
		fs.readFile("./Public/index.html", "UTF-8", function(err, content){
			response.writeHead(200, {"Content-Type" : "text/html"});
		response.end(content);
		});
	}else if(request.url.match(/.css$/)){
		var cssPath = path.join(__dirname, 'public', request.url);

		var fileStream = fs.createReadStream(cssPath, "UTF-8");

		response.writeHead(200, {"Content-Type" : "text/CSS"});
		fileStream.pipe(response);

	}else if(request.url.match(/.jpg$/)){
		var imagePath = path.join(__dirname, 'public', request.url);
		var imageStream = fs.createReadStream(imagePath);

		response.writeHead(200, {"Content-Type" : "image/jpg"});
		imageStream.pipe(response);
	}else{
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end("404 file not found.");
	}

}).listen(3000);

global.console.log("Listening on 3000 port.");