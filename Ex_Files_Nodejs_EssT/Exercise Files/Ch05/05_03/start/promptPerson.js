var readline = require('readline');
var fs = require("fs");
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = { name: '', sayings: []};

rl.question("What is your name?", function(answer){
	realPerson.name = answer;

	// Create the file using FS module.
	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n==================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say?`);
	rl.prompt();
	rl.on('line', function(saying){
		if(saying.toLowerCase().trim() === 'exit'){
			rl.close();
		}
		else{
			realPerson.sayings.push(saying.trim());
			rl.setPrompt(`What else would ${realPerson.name} say? `);

			// Append the file using FS module.
			//fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);

			// add callback function to handle errors
			fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`, function(err){
				if(err){
					global.console.log(err);
				}
			});


			rl.prompt();
			//global.console.log(`Saying: ${saying.trim()}.`);
			//global.console.log(saying.trim());
		}
	});
});

rl.on('close', function(){
	global.console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
})