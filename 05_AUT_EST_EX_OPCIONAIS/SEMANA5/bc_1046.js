var input = require("fs").readFileSync("stdin","utf8");
var valores = input.split(" ");

var i = parseInt(valores.shift());
var f = parseInt(valores.shift());
var duracao = 0;

if(i<f){
    duracao = f-i;
    console.log("O JOGO DUROU "+ duracao +" HORA(S)");
}
else if(i==f){
    console.log("O JOGO DUROU 24 HORA(S)");
}
else if(i>f){
    duracao = (24-i)+f;
    console.log("O JOGO DUROU "+ duracao +" HORA(S)");
}