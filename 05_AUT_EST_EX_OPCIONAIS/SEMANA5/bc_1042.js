// var input = require("fs").readFileSync("stdin","utf8");
// var valores = input.split(" ");
// var valoresAntigos = input.split(" ");
// var temp = 0;

// for(i=0; i<=valores.length; i++){
//     for(j=0; j<=valores.length; j++){
//         if(parseInt(valores[j]) > parseInt(valores[j+1])){
//             temp = valores[j];
//             valores[j] = valores[j+1];
//             valores[j+1] = temp;
//         }
//     }
// }

// for(i=0; i<=(valores.length-1); i++){
//     console.log(valores[i]);
// }
// console.log("\n");
// for(i=0; i<=(valores.length-1); i++){
//     console.log(valoresAntigos[i]);
// }

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const comp = (a, b) => a - b; //constante

let V = lines.shift().trim().split(' ').map((x) => parseInt(x));
//numeros separados e numeros inteiros 
let v = [...V];

v.sort(comp); //ordenar

for(let i = 0; i < 3; ++i){ //para (deixa i = 0 e i < 3)
    console.log(v[i]); //escreve isso
}
console.log();
for(let i = 0; i < 3; ++i){ //para (deixa i = 0 e i < 3)
    console.log(V[i]);
}