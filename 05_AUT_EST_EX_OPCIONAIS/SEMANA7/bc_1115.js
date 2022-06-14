var input = require("fs").readFileSync("stdin","utf8");
var linhas = input.split("\n");

for(i=0; i<=linhas.length-1; i++){

    var [x,y] = linhas[i].split(" ");
    x = Number(x);
    y = Number(y);

    if(x === 0  || y === 0){
        break;
    }

    if(x>0){
        if(y>0){
            console.log("primeiro");
        }
        else if(y<0){
            console.log("quarto");
        }
    }
    else if(x<0){
        if(y<0){
            console.log("terceiro");
        }
        else if(y>0){
            console.log("segundo");
        }
    }
}