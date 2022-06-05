var input = require("fs").readFileSync("stdin","utf8");

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

const pesoA = 3.5;
const pesoB = 7.5;

var media = (A*pesoA + B*pesoB)/11;

console.log("MEDIA = " + media.toFixed(5));