var test = require('unit.js');
var m = require('matrix.js');

var example = 'hello';
// assert that example variable is a string
test.string(example);
// or with Must.js
test.must(example).be.a.string();
// or with assert
test.assert(typeof example === 'string');