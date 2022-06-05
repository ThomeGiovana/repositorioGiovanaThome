// require = requisição de módulos
// fs = módulo de file system = lê conteúdo de arquivos
var input = require("fs").readFileSync("stdin","utf8");

var [A, B] = input.split("\n");
var X = parseInt(A) +parseInt(B);

console.log("X = " + X);