var input = require("fs").readFileSync("stdin","utf8");

//([0,25], (25,50], (50,75], (75,100])

n = parseFloat(input);

if(n>=0 & n<=25){
    console.log("Intervalo [0,25]");
}
else if(n>25 & n<=50){
    console.log("Intervalo (25,50]");
}
else if(n>50 & n<=75){
    console.log("Intervalo (50,75]");
}
else if(n>75 & n<=100){
    console.log("Intervalo (75,100]");
}
else{
    console.log("Fora de intervalo");
}