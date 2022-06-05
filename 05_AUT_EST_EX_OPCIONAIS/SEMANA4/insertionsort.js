var vetor = [13, 5, 2, 1, 3, 8];

var n = vetor.length;
for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let atual = vetor[i];
    // The last element of our sorted subarray
    let j = i-1; 
    while ((j > -1) && (atual < vetor[j])) {
        vetor[j+1] = vetor[j];
        j--;
    }
    vetor[j+1] = atual;
}
console.log(vetor);