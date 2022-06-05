var input = require("fs").readFileSync("stdin","utf8");
var valores = input.split(" ");

var n1 = parseFloat(valores.shift()) * 2;
var n2 = parseFloat(valores.shift()) * 3;
var n3 = parseFloat(valores.shift()) * 4;
var n4 = parseFloat(valores.shift()) * 1;

var media = (n1 + n2 + n3 + n4)/10;
console.log("Media: " + media.toFixed(1));

if(media>=7){
    console.log("Aluno aprovado.");
}
else if(media<5){
    console.log("Aluno reprovado.");
}
else{
    console.log("Aluno em exame.");

    var valores = input.split("\n");
    var notaExame = parseFloat(valores[1]);

    console.log("Nota do exame: " + notaExame.toFixed(1));
    media = (media + notaExame)/2;
    if(media>=5){
        console.log("Aluno aprovado.");
    }
    else if(media<5){
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + media.toFixed(1));
}