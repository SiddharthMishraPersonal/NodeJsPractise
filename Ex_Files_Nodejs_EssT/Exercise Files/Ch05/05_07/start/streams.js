var fs=require("fs");

/*
fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
	console.log(`File Read length: ${chatlog.length}`);
});

global.console.log("Read Chatlog file.")
*/

var stream = fs.createReadStream("./Chat.log", "UTF-8");

var data = "";

stream.once("data", function(){
	global.console.log("\n\n\n");
	global.console.log("Started reading file");
	global.console.log("\n\n\n");
});

stream.on("data", function(chunk){
	process.stdout.write(`	chunk: ${chunk.length} |`);

	data += chunk;
});

stream.on("end", function(){
	global.console.log("\n\n\n");
	global.console.log(`Finished reading file ${data.length}`);
	global.console.log("\n\n\n");
});