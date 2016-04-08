var exec = require("child_process").exec;

exec("open http://www.linkedin.com");
exec("open -a Terminal .");


exec("ls", function(err, stdout){
	if(err){
		throw err;
	}
	else{
		console.log("Listing finished.");
		console.log(stdout);
	}
});

exec("git version", function(err, stdout){
	if(err)
	{
		throw err;
	}
	else{
		console.log("Git Version");
		console.log(stdout);
	}
});