var input = require("fs").readFileSync("stdin","utf8");
var valores = input.split(" ")

for(i=valores.length; i>=1; i--){
    for(j=valores.length; j>=1; j--){
        if(parseFloat(valores[j]) > parseFloat(valores[j-1])){
            temp = valores[j];
            valores[j] = valores[j-1];
            valores[j-1] = temp;
        }
    }
}

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

if(A>=(B+C)){
    console.log("NAO FORMA TRIANGULO");
}
else {
    var BC2 = Math.pow(B,2) + Math.pow(C,2);

    if(Math.pow(A,2) == BC2){
    console.log("TRIANGULO RETANGULO");
    }
    if(Math.pow(A,2) > BC2){
        console.log("TRIANGULO OBTUSANGULO");
    }
    if(Math.pow(A,2) < BC2){
        console.log("TRIANGULO ACUTANGULO");
    }
    if(A==B & A==C & B==C){
        console.log("TRIANGULO EQUILATERO");
    }
    else if(A==B || A==C || B==C){
        console.log("TRIANGULO ISOSCELES");
    }
}