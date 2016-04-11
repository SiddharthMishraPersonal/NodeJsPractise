var https = require("https");

module.exports = {

	printName(person) {
		return `${person.last}, ${person.first}`;
	},

	loadWiki(person, callback){
		var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
		https.get(url, function(response){
			var body = "";
			response.on("data", function(chunk){
				body += chunk;
			});

			response.on("end", function(){
				callback(body);
			})
		});
	}

};