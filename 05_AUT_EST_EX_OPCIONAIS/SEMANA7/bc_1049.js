input = require("fs").readFileSync("stdin","utf8");
var [tipo1, tipo2, tipo3] = input.split("\n");

tipo1 = tipo1.trim();
tipo2 = tipo2.trim();
tipo3 = tipo3.trim();

if(tipo1 === "vertebrado"){
    if(tipo2 === "ave"){
        if(tipo3 === "carnivoro"){
            console.log("aguia");
        }
        else if(tipo3 === "onivoro"){
            console.log("pomba");
        }
    }
    else if(tipo2 === "mamifero"){
        if(tipo3 === "onivoro"){
            console.log("homem");
        }
        else if(tipo3 === "herbivoro"){
            console.log("vaca");
        }
    }
}
else if(tipo1 === "invertebrado"){
    if(tipo2 === "inseto"){
        if(tipo3 === "hematofago"){
            console.log("pulga");
        }
        else if(tipo3 === "herbivoro"){
            console.log("lagarta");
        }
    }
    else if(tipo2 === "anelideo"){
        if(tipo3 === "hematofago"){
            console.log("sanguessuga");
        }
        else if(tipo3 === "onivoro"){
            console.log("minhoca");
        }
    }
}