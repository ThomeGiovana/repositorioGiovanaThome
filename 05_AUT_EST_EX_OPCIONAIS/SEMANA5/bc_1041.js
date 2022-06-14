var input = require("fs").readFileSync("stdin","utf8");
input.split(" ");

var [x,y] = input.split(" ");
x = parseFloat(x);
y = parseFloat(y);

if(x===0 & y===0){
    console.log("Origem");
}
else if(x===0){
    console.log("Eixo Y");
}
else if(y===0){
    console.log("Eixo X");
}
else if(x>0){
    if(y>0){
        console.log("Q1");
    }
    else if(y<0){
        console.log("Q4");
    }
}
else if(x<0){
    if(y<0){
        console.log("Q3");
    }
    else if(y>0){
        console.log("Q2");
    }
}