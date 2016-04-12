var fs = require("fs");

// Synchronously reading filesystems.
//var files = fs.readdirSync('./lib');

// Async read
fs.readdir('./lib', function(err, files){
	if(err){
		throw err;
	}

	console.log(files);
})

global.console.log("readling files...");