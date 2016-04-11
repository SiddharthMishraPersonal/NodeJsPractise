// TDD way
var expect = require("chai").expect;
var tools = require("../lib/tools.js")

describe("printName()", function(){
	it("should print the last name first and first name last.", function(){
		var results = tools.printName({first: "Alex", last: "Banks"});
		expect(results).to.equal("Banks, Alex");

	});

});