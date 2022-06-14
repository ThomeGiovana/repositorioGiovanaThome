var input = require("fs").readFileSync("stdin","utf8");
var salario = parseFloat(input).toFixed(2);
var imposto;

if(salario>=0 & salario<=2000){
    console.log("Isento");
}
else if(salario>2000 & salario<=3000){
    imposto = (salario - 2000) * 0.08;
    console.log("R$ " + imposto.toFixed(2));
}
else if(salario>3000 & salario<=4500){
    imposto = (salario - 3000) * 0.18 + (1000 * 0.08);
    console.log("R$ " + imposto.toFixed(2));
}
else if(salario>4500){
    imposto = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08)
    console.log("R$ " + imposto.toFixed(2));
}