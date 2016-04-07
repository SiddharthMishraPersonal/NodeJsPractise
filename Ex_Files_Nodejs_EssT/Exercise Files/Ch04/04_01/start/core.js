// 'require' is used to load modules. Path is core module.
var path = require('path'); 
global.console.log(path.basename(__filename));

// Join file/folder path
var dirUpload = path.join(__dirname, 'www', 'files', 'uploads');
global.console.log(dirUpload);

global.console.log(""); // Break line

// Utilities: Load util module using require
var util = require('util');
util.log(dirUpload);

global.console.log(""); // Break line

// V8 : Load V8 using require to get memory usage statics
var v8 = require('v8');
util.log(v8.getHeapStatistics());

global.console.log(""); // Break line