var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(response){
console.log("s");
	var responseBody = "";
	global.console.log("Response from server started.");
	global.console.log(`Server Status: ${response.statusCode}`);
	global.console.log("Respomse Headers: %j", response.headers);

	response.setEncoding("UTF-8");

	response.once("data", function(chunk){
		global.console.log(chunk);
	});

	response.on("data", function(chunk){
		global.console.log("--Chunk-- %j", chunk.length);
		responseBody += chunk;
	});

	response.on("end", function(){
		fs.writeFile("george-washington.html", responseBody, function(err){
			if(err){
				throw err;
			}

			global.console.log("File Downloaded");
			global.console.log(responseBody);
		});
	});
});

req.on("error", function(err){
	global.console.log("Problem with request: %j", err.message);
});

req.end();