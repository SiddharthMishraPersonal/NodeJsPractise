var questions = [	"What is your name?",
					"What is your fav hobby?",
					"What is your preferred programming language?"];

var answers = [];

function ask(i){
	process.stdout.write(`\n\n${questions[i]}`);
	process.stdout.write("	>	");
}

process.stdout.on('data', function(data){
	//process.stdout.write('\n' + data.toString().trim() + '\n')
	answers.push(data.toString().trim());

	if(answers.length < questions.length){
		ask(answers.length);
	}else{
		process.exit();
	}
});

// new listener: listen exit event on process object.
process.on('exit', function(){
	process.stdout.write("\n\n\n\n");
	process.stdout.write(`Go play ${answers[1]}, ${answers[0]}. We can learn ${[answers[2]]} language later.`)
	process.stdout.write("\n\n\n\n");
});


ask(0);