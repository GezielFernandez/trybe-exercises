let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/////////////////////////////////////////////////////////////////////////
// Exercício 1: imprimir todos os valores do array numbers.
for(let i = 0; i < numbers.length; i += 1) {
    console.log(i);
}


/////////////////////////////////////////////////////////////////////////
// Exercício 2: Somar todos os valores contidos no array e imprimir resultado
let somarValores = 0;
for(let i = 0; i < numbers.length; i += 1) {
    somarValores = somarValores + numbers[i];
}

console.log(`A soma dos valores do array numbers é ${somarValores}`);

/////////////////////////////////////////////////////////////////////////
// Exercício 3: Calcular a média aritmética dos valores do array
let mediaArit = somarValores / numbers.length;
console.log(`A média aritmética do array é ${mediaArit}`);

/////////////////////////////////////////////////////////////////////////
// Exercício 4: Valor maior que 20?
if(mediaArit > 0){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

/////////////////////////////////////////////////////////////////////////
// Exercício 5: Procurar pelo valor maior no array
let maior = numbers[0];

for(j = 0; j < numbers.length; j += 1) {
  if (numbers[j] > maior) {
    maior = numbers[j];
  }
}
console.log(`O maior valor é: ${maior}`);


/////////////////////////////////////////////////////////////////////////
// Exercício 6: Encontrar os números ímpares.
let impares = 0;
for(counter = 0; counter < numbers.length; counter += 1) {
    if(numbers[counter] % 2 != 0) {
        impares += 1;
   }
}
console.log(impares);

if(impares > 0) {
    console.log(`O array possui ${impares} números ímpares`);
} else {
    console.log('nenhum valor ímpar encontrado');
}

/////////////////////////////////////////////////////////////////////////
// Exercício 7: 
let menor = numbers[0];

for(j = 0; j < numbers.length; j += 1) {
  if (numbers[j] < menor) {
    menor = numbers[j];
  }
}
console.log(`O menor valor é: ${menor}`);

/////////////////////////////////////////////////////////////////////////
// Exercício 8: Array que vá de 1 até 25.
let vetor = [];
for(s = 1; s <= 25; s += 1) {
    vetor.push(s);
}
console.log(vetor);

/////////////////////////////////////////////////////////////////////////
// Exercício 9: Usando vetor, dividir cada elemento por 2, e imprimi-lo.
let divisao = [];
for(t = 0; t < vetor.length; t += 1){
    divisao.push(vetor[t]/2);
}
console.log(divisao);