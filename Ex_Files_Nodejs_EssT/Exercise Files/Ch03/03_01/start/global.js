var hello = "Hello world from node.js";
var path = require("path");

global.console.log(`path: ${path.basename(__filename)}`);



global.console.log(" ");
global.console.log(" ");
var justNode = hello.slice(17);
global.console.log(justNode);
global.console.log(`This is the result ${justNode}`);

global.console.log(__dirname);
global.console.log(" ");
global.console.log(__filename);
global.console.log(" ");


global.console.log(hello)