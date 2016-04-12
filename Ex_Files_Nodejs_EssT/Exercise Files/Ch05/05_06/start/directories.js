var fs = require("fs");

//fs.renameSync("./assets/logs", "./logs");

//global.console.log("Directory removed.");

/*
// Remove directory async
fs.rmdir("./assets", function(err){
	if(err){
		throw err;
	}

	global.console.log("assets Directory removed");
});
*/

fs.readdirSync("./logs").forEach(function(fileName){
	fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", function(err){
	if(err){
		throw err;
	}

	global.console.log("removed logs Directory.")
});