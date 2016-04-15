var expect = require("chai").expect;
var tools = require("../tools");
var nock = require("nock");

describe("Tools", function() {

    describe("printName()", function() {
        it("should print the last name first", function() {
            var results = tools.printName({ first: "Alex", last: "Banks"});
            expect(results).to.equal("Banks, Alex");
        });
    });

    describe("loadWiki()", function() {

        // Mocking a web server to respond the request.
        // "before" is a mocha hook that will be run before the test.
        before(function(){
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln");
        });

        it("Load Abraham Lincoln's wikipedia page", function(done) {

            tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
                expect(html).to.equal("Mock Abraham Lincoln");
                done();
            });

        });

    });

});


