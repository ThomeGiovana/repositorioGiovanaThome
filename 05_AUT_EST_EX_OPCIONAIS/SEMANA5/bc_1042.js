var input = require("fs").readFileSync("stdin","utf8");
var valores = input.split(" ");
var valoresAntigos = input.split(" ");
var temp = 0;

for(i=0; i<=valores.length; i++){
    for(j=0; j<=valores.length; j++){
        if(parseInt(valores[j]) > parseInt(valores[j+1])){
            temp = valores[j];
            valores[j] = valores[j+1];
            valores[j+1] = temp;
        }
    }
}

for(i=0; i<=(valores.length-1); i++){
    console.log(valores[i]);
}
console.log("");
for(i=0; i<=(valores.length-1); i++){
    console.log(valoresAntigos[i]);
}
console.log("\n");