var fs = require("fs");

fs.renameSync("./lib/project-config.js", "./lib/config.json");

fs.rename("./lib/project-configAsync.js", "./lib/configAsync.json", function(err){
	if(err){
		global.console.log("error occurred while renaming file.");
	}
	else{
		global.console.log("Config JSON file renamed.");
	}
});

fs.rename("./lib/notes.md", "notes.md", function(err){
		if(err){
			global.console.log("Error occurred while moving.");
		}else{
			global.console.log("notes.md file is moved.")
		}
	});
