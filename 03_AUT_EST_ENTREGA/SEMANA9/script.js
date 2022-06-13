function CalcularEx1(){
    let n = document.getElementById("n").value;
    let resultado = document.getElementById("resultado");
    n = n.split("");
    if(n[0] % 2 == 0){
        resultado.innerHTML = "Casa da centena par";
    }
    else{
        resultado.innerHTML = "Casa da centena ímpar";
    }
};

function ExecutarEx2(){
    let n = document.getElementById("n").value;
    if(Number(n)>0){
        let resultado = document.getElementById("resultado");
        n = n.split("");
        let soma = 0;
        for(i=0; i<n.length; i++){
            soma += parseInt(n[i]);
        };
        resultado.innerHTML = "A soma dos algarismos é " + soma;
    }
    else{
        resultado.innerHTML = "Apenas números positivos!"
    };
};

function ExecutarEx3(){
    let nome1 = document.getElementById("nome1").value;
    let nome2 = document.getElementById("nome2").value;
    let nome3 = document.getElementById("nome3").value;
    var nomes = [nome1, nome2, nome3];
    nomes.sort();
    for(i=0; i<nomes.length; i++){
        document.getElementById("resultado").innerHTML += nomes[i] + "<br>";   
    }
};

function ExecutarEx4(){
    document.getElementById("resultado").innerHTML = "";
    var n = document.getElementById("n").value;
    var fibonacci = [1,1];  
    for(i=1; i<=parseInt(n); i++){
        fibonacci.push(fibonacci[i] + fibonacci[i-1]);
    };
    for(i=0; i<parseInt(n); i++){
        document.getElementById("resultado").innerHTML += fibonacci[i] + "<br>";
    };
};

function ExecutarEx5(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Números primos no intervalo: <br>";
    var inicio = document.getElementById("n1").value;
    var fim = document.getElementById("n2").value;
    for(i=parseInt(inicio); i<=parseInt(fim); i++){
        let contPrimo = 0;
        for(n=1; n<=i; n++){
            if(i % n === 0){
                contPrimo++;
            }
        }
        if(contPrimo === 2 || i === 1){
            document.getElementById("resultado").innerHTML += i + "<br>";
        }
    };
};