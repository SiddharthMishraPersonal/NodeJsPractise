//var event  = require('events');
//var emitter = new event.EventEmitter();

//emitter.on('customEvent', function(message, status){
//	global.console.log(`${status} : ${message}`);
//});

//emitter.emit('customEvent', "hello world", "200");



var eventEmitter = require('events').EventEmitter;
var Person = function(name){
	this.name = name;
}

// Person object to inherit eventemmiter
var util = require('util');
util.inherits(Person, eventEmitter);

var ben = new Person("Ben Franklin");
ben.on('speak', function(said){
	global.console.log(`${this.name} : ${said}`);
});

ben.emit('speak', "You may delay but time won't.");