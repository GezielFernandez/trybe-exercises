// Bônus dia 4.2
///////////////////////////////////////////////////////////////////
// Exerício 01: ordenar de forma crescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        if(numbers[i] < numbers[j]) {
        let position = numbers[i];

        numbers[i] = numbers[j];
        numbers[j] = position;
        }
    }
}

console.log(numbers);

///////////////////////////////////////////////////////////////////
// Exerício 02: ordenar de forma decrescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        if(numbers[i] > numbers[j]) {
        let position = numbers[i];

        numbers[i] = numbers[j];
        numbers[j] = position;
        }
    }
}

console.log(numbers);


///////////////////////////////////////////////////////////////////
// Exerício 03: Array derivado de numbers (multiplicação par a par).
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i + 1]) {
        novoArray.push(numbers[i] * numbers[i + 1]);
    } else {
        novoArray.push(numbers[i] * 2);
    }   
}

console.log(novoArray);