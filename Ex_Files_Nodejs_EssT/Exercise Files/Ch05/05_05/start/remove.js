var fs = require("fs");

try{
	// to remove files
	fs.unlinkSync("./lib/config.json");
}catch(err){
	global.console.log(err);
}

fs.unlink("notes.md", function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("File removed.")
	}
})