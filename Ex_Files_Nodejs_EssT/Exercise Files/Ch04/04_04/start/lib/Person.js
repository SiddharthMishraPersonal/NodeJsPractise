var eventEmitter = require('events').EventEmitter;
var Person = function(name){
	this.name = name;
}

// Person object to inherit eventemmiter
var util = require('util');
util.inherits(Person, eventEmitter);

module.exports = Person;