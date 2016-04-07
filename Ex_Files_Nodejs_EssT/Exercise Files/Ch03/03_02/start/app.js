//global.console.log(process.argv);

function grab(flag){
	var index = process.argv.indexOf(flag);

	return (index == -1) ? null : process.argv[index+1];
}

var user = grab('--user');
var greeting = grab('--greeting');

if(!user || !greeting){
	global.console.log("Error");
}else{
	global.console.log(`Welcome ${user}, ${greeting}`);
}