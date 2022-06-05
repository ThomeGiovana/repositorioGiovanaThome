var vetor = [13, 5, 2, 1, 3, 8];
var min;

for(i=0; i<vetor.length; i++){
    min = i;
    for(let c=i+1; c<vetor.length; c++){
        if(vetor[c]<vetor[min]){
            min = c;
        }
    }
    if(min != i){
        var tmp = vetor[i]; 
        vetor[i] = vetor[min];
        vetor[min] = tmp;     
    }
}

console.log(vetor);