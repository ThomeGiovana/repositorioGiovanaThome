var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var A = valores.shift();
var N = valores.shift();
var soma = 0;

while(N<=0){
    for(i=0; i<N; i++){
        soma += A + i;
    }
};