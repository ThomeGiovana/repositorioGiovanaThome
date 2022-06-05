// require = requisição de módulos
// fs = módulo de file system = lê conteúdo de arquivos
var input = require("fs").readFileSync("stdin","utf8");

const pi = 3.14159;
r = parseFloat(input);
var area = pi * Math.pow(r, 2);

console.log("A=" + area.toFixed(4));