let _ = require('lodash');

// String Tests
let str = ":65001/unsapi/location/1";
let splitArray = str.split('/');
let port = _.trimStart([string=splitArray[0]], [chars=':']);

console.log(splitArray);
console.log(port);