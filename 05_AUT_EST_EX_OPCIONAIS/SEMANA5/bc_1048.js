var input = require("fs").readFileSync("stdin","utf8");
var salario = parseFloat(input);
var novoSalario = 0;
var aumento = 0;

if(salario>=0 & salario<=400){
    aumento = 0.15;
    novoSalario = salario + (salario*aumento);
}
else if(salario>400 & salario<=800){
    aumento = 0.12;
    novoSalario = salario + (salario*aumento);
}
else if(salario>800 & salario<=1200){
    aumento = 0.1;
    novoSalario = salario + (salario*aumento);
}
else if(salario>1200 & salario<=2000){
    aumento = 0.07;
    novoSalario = salario + (salario*aumento);
}
else if(salario>2000){
    aumento = 0.04;
    novoSalario = salario + (salario*aumento);
}

var reajuste = novoSalario - salario;
console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + Math.round(aumento*100) + " %");