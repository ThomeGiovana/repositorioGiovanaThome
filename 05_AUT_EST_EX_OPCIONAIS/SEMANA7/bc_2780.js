input = require("fs").readFileSync("stdin","utf8");
D = Number(input);

if(D<=800){
    console.log(1);
}
else if(D>800 & D<=1400){
    console.log(2);
}
else if(D>1400 & D<=2000){
    console.log(3);
}