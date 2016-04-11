var spawn = require("child_process").spawn;
var cp = spawn("node", ["alwaysTalking"]);

cp.stdout.on('data', function(data){
	console.log(`STDOUT: ${data}`);;
});

cp.on('close', function(){
	console.log("Child process had ended.");
	process.exit();
});

setTimeout(function(){
	cp.stdin.write("stop");
}, 4000);