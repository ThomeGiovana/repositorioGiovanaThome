var input = require("fs").readFileSync("stdin","utf8");
var valores = input.split(" ");

var cod = parseInt(valores.shift());
var quant = parseInt(valores.shift());
var pagar

if(cod == 1){
    pagar = 4 * quant
}
if(cod == 2){
    pagar = 4.5 * quant
}
if(cod == 3){
    pagar = 5 * quant
}
if(cod == 4){
    pagar = 2 * quant
}
if(cod == 5){
    pagar = 1.5 * quant
}
pagar = parseFloat(pagar)

console.log("Total: R$ " + pagar.toFixed(2));