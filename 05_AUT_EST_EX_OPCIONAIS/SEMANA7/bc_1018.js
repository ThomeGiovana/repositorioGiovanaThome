var input = require("fs").readFileSync("stdin","utf8");
var valor = parseInt(input);
var notasDe100;
var notasDe50 = 0;
var notasDe20 = 0;
var notasDe10 = 0;
var notasDe5 = 0;
var notasDe2 = 0;
var notasDe1 = 0;
var resto;

console.log(valor);

// notasDe! = parseInt(valor/!);
// valor = valor - (notasDe! * !);
// console.log(notasDe! + "");

notasDe100 = parseInt(valor/100);
valor = valor - (notasDe100 * 100);
console.log(notasDe100 + " nota(s) de R$ 100,00");

notasDe50 = parseInt(valor/50);
valor = valor - (notasDe50 * 50);
console.log(notasDe50 + " nota(s) de R$ 50,00");

notasDe20 = parseInt(valor/20);
valor = valor - (notasDe20 * 20);
console.log(notasDe20 + " nota(s) de R$ 20,00");

notasDe10 = parseInt(valor/10);
valor = valor - (notasDe10 * 10);
console.log(notasDe10 + " nota(s) de R$ 10,00");

notasDe5 = parseInt(valor/5);
valor = valor - (notasDe5 * 5);
console.log(notasDe5 + " nota(s) de R$ 5,00");

notasDe2 = parseInt(valor/2);
valor = valor - (notasDe2 * 2);
console.log(notasDe2 + " nota(s) de R$ 2,00");

notasDe1 = parseInt(valor/1);
valor = valor - (notasDe1 * 1);
console.log(notasDe1 + " nota(s) de R$ 1,00");