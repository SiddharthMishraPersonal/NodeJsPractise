var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order"); // We will load all order to rewire

describe("Ordering Items", function(){
	
	beforeEach(function(){
		
		// Reather than loading whole inventory.json we will create a test data to test the orderItem method in Order.js.
		this.testData = [
		{ sku: "AAA", qty: 10},
		{ sku: "BBB", qty: 0},
		{ sku: "CCC", qty: 3},
		];

		order.__set__("inventoryData", this.testData);

	});

	it("order and item when there are enough in stock.", function(done){

		order.orderItem("CCC", 3, function(){
			done();
		});

	});

});