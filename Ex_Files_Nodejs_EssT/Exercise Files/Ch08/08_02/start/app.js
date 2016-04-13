var express = require("express");
var app = express();

app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`);
	next();
});

app.use(express.static("./public"));

app.listen(3000);
global.console.log("Listening on port 3000");

module.exports = app;