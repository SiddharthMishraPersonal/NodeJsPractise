var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

//global.console.log("wait for it");

// showing waiting in %age

function writeWaitingPercentage(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting  ... ${p}%`);
}

// Setting interval: works like Timer in C#
var interval = setInterval(function(){
	currentTime += waitInterval;
	//global.console.log(`waiting ${currentTime/1000} seconds...`);
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercentage(percentWaited);
}, waitInterval);


// Works like sleep in C$
setTimeout(function (){
	clearInterval(interval);
	writeWaitingPercentage(100);
	global.console.log("\n\nInterval cleared");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercentage(percentWaited);