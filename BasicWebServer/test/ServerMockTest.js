var request = require("supertest")
var expect = require('chai').expect;
var cheerio = require("cheerio");
var nock = require("nock");


    // Test HTTP methods: GET, POST and DELETE
    describe("Mocking :- Dictionary API", function () {

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

            nock("http://localhost:3000").get("/").reply(200, `<html> <head>
           <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
            <meta charset="utf-8">

            <title>Skier Dictionary</title>

        <link rel="stylesheet" href="/css/style.css"/>

            </head>
            <body>

            <h1>Skier Dictionary</h1>
        <dl></dl>
        <p>Dictionary Empty</p>

        <form>
        <input type="text" id="term" name="term" placeholder="new term..." required />
        <input type="Text" name="defined" id="defined" placeholder="new definition..." required />
        <button>Add Term</button>
        </form>

        <script src="/js/jquery.min.js"></script>
            <script src="/js/dictionary.js"></script>

            </body>
            </html>`);

            nock("http://localhost:3000").get("/dictionary-api").reply(200, this.defs);
            nock("http://localhost:3000").delete("/dictionary-api/One").reply(200);
            nock("http://localhost:3000").post("/dictionary-api",{"term" : "Three", "defined" : "Term Three Defined" }).reply(200, {"status" : "Success"});
        });

        // Test the home page.
        it("Mocking - Loads the home page with mocha page content", function(done){
            request("http://localhost:3000").get("/").expect(200).end(function (error, response) {
                var $ = cheerio.load(response.text);
                var pageHeading = $("body>h1:first-child").text();
                console.log(pageHeading);
                expect(pageHeading).to.equal("Skier Dictionary");
                done();
            });
        });

        // Test GET method
        it("Mocking - GETS dictionary-api", function(done){
            var defs = this.defs;
            request("http://localhost:3000").get("/dictionary-api")
                .expect(200)
                .end(function (error, response) {
                    var terms = JSON.parse(response.text);
                    expect(terms).to.deep.equal(defs);
                    done();
                });
        });

        // Test GEt method - a negative test
        it("Mocking - Negative test: GETS dictionary-api",function (done) {
            request("http://localhost:3000")
                .get("/dictionary-api")
                .expect(200)
                .end(function (error, response) {
                    var terms = JSON.parse(response.text);
                    expect(terms).to.deep.not.equal([]);
                    done();
                });
        });

        // Test POST method
        it("Mocking - POSTS dictionary-api", function(done){
            request("http://localhost:3000").post("/dictionary-api")
                .send({"term" : "Three", "defined" : "Term Three Defined" })
                .expect(200)
                .end(done);
        });

        // Test POST method
        it("Mocking - POSTS dictionary-api", function(done){
            request("http://localhost:3000").post("/dictionary-api")
                .send({"term" : "Three", "defined" : "Term Three Defined" })
                .expect(200)
                .end(function (error, response) {
                    var status = JSON.parse(response.text);
                    expect(status.status).to.equal("Success");
                    done();
                });
        });

        // Test DELETE method
        it("Mocking - DELETES dictionary-api", function(done){
            request("http://localhost:3000").delete("/dictionary-api/One")
                .expect(200)
                .end(done);
        });

    });