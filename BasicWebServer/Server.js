/**
 * Created by wktf64 on 4/14/16.
 */
var express = require("express");

var app = express();

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied."
    },
    {
        term: "Test",
        defined: "My own test."
    }
];

app.use(function(req, res, next) {
    console.log("%j request for '%j'", req.method, req.url);
    next();
});

app.use(express.static("./public"));

app.get("/dictionary-api", function(request, response){
    console.log("dictionary api called.");
    response.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;