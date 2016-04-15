var request = require("supertest")
var expect = require('chai').expect;
var rewire = require('rewire');
var cheerio = require("cheerio");

var app = rewire('../Server.js');

describe("Dictionary App", function () {

    // Test the home page.
    it("Loads the home page", function(done){
        request(app).get("/").expect(200).end(function (error, response) {
            var $ = cheerio.load(response.text);
            var pageHeading = $("body>h1:first-child").text();
            expect(pageHeading).to.equal("Skier Dictionary");
            done();
        });
    });

    // Test HTTP methods: GET, POST and DELETE
    describe("Dictionary API", function () {

        beforeEach(function () {

            this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        // Test GET method
        it("GETS dictionary-api", function(done){
            var defs = this.defs;
            request(app).get("/dictionary-api")
                .expect(200)
                .end(function (error, response) {
                    var terms = JSON.parse(response.text);
                    expect(terms).to.deep.equal(defs);
                    done();
                });
        });

        // Test GEt method - a negative test
        it("Negative test: GETS dictionary-api",function (done) {
            request(app)
                .get("/dictionary-api")
                .expect(200)
                .end(function (error, response) {
                   var terms = JSON.parse(response.text);
                    expect(terms).to.deep.not.equal([]);
                    done();
                });
        });

        // Test POST method
        it("POSTS dictionary-api", function(done){
            request(app).post("/dictionary-api")
                .send({"term" : "Three", "defined" : "Term Three Defined" })
                .end(done);
        });

        // Test DELETE method
        it("DELETES dictionary-api", function(done){
            request(app).delete("/dictionary-api/One")
                .expect(200)
                .end(done);
        });

    });

});