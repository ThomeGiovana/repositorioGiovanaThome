var input = require("fs").readFileSync("stdin","utf8");

var valores = input.split(" ");

// [2,6]

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseInt(valores.shift());
var D = parseInt(valores.shift());

var somaCD = C+D;
var somaAB = A+B;

if(B>C & D>A & somaCD>somaAB & C>0 & D>0 & A%2===0){
    console.log("Valores aceitos");
}
else{
    console.log("Valores nao aceitos");
}