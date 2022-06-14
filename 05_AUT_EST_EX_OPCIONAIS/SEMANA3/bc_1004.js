var input = require("fs").readFileSync("stdin","utf8");

var valores = input.split("\n");

var n1 = parseInt(valores.shift());
var n2 = parseInt(valores.shift());

var PROD = n1 * n2;
console.log("PROD = " + PROD);
