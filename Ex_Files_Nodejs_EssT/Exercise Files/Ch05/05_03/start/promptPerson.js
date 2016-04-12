var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = { name: '', sayings: []};

rl.question("What is your name?", function(answer){
	realPerson.name = answer;

	//
	//	TODO: Create new markdown file
	//

	rl.setPrompt(`What would ${realPerson.name} say?`);
	rl.prompt();
	rl.on('line', function(saying){
		if(saying.toLowerCase().trim() === 'exit'){
			rl.close();
		}
		else{
			realPerson.sayings.push(saying.trim());
			rl.setPrompt(`What else would ${realPerson.name} say? `);

			//
			//	TODO: Append Sayings to thata markdown file.
			//


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