input = require("fs").readFileSync("stdin","utf8");
valores = input.split("\n");

var notaTeste;
var notas = [];
var n1, n2, media;

for(i=0; i<valores.length; i++){
    notaTeste = valores[i];
    if(notaTeste>= 0 & notaTeste<=10){
        notas.push(notaTeste);
    }
    else{
        console.log("nota invalida");
    }
}

n1 = notas.shift();
n2 = notas.shift();

media = (Number(n1) + Number(n2))/2

console.log("media = " + media.toFixed(2));