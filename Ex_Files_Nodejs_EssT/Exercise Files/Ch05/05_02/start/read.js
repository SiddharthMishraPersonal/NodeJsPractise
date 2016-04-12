var fs = require("fs");

// Reading Synchronously
//var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");

// reads binary.
//var contents = fs.readFileSync("./lib/sayings.md");
/*
var contents = fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents){
	if(err){
		throw err;
	}

	global.console.log(contents);
});
*/

global.console.log("Readling file async...");



var path = require("path");

fs.readdir("./lib", function(err, files){
	files.forEach(function(fileName){
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store"){
			fs.readFile(file, "UTF-8", function(err, contents){
				console.log(contents);
			})
		}
	})
})