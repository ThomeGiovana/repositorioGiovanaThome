var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var t = lines.shift();
var vm = lines.shift();
const kmL = 12;

dist = Number(vm) * Number(t);
consumo = dist/kmL;

console.log(consumo.toFixed(3));