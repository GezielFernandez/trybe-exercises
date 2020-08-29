// Exercício 1: realizar operações aritméticas básicas.
// Adição:
let a = 12;
let b = 4;

let adicao = a + b;
console.log(adicao);

// Subtração:
 let subtracao = a - b;
 console.log(subtracao);

 // Multiplicação:
 let multiplicacao = a * b;
 console.log(multiplicacao);

 // Divisão:
 let divisao = a/b;
 console.log(divisao);

 // Módulo:
 let modulo = a % b;
 console.log(modulo);

///////////////////////////////////////////////////////////////////////////////
// Exercício 2: verificar o maior de 2 números.
if(a > b) {
    console.log(a);
} else {
    console.log(b);
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 3: verificar o maior de 3 números.
let c = 32
if(a > b && a > c) {
    console.log(a);
} else if(b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 4: verificar se o valor e positivo, negativo, ou zero.
let d = -2;
if(d > 0) {
    console.log("positive");
} else if(d < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 5: verificar se a soma dá 180 graus.
let ang1 = 44;
let ang2 = 45;
let ang3 = 90;
let triangulo = ang1 + ang2 + ang3; 
if(triangulo == 180) {
    console.log(true);
} else {
    console.log(false);
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 6: informar a movimentação que faz uma peça de xadrez.
let piece; 
piece = 'Batata'
switch(piece.toLowerCase()) {
    case 'pawn':
        console.log('It moves forwards, one square at a time. It captures diagonally.');
        break;
    case 'knight':
        console.log('It moves 2 squares vertically and 1 horizontally, or viceversa. It can jump over other pieces and replaces the contrary located in its destination.');
        break;
    case 'bishop':
        console.log('It moves diagonally, the squares must be free. It captures by replacing the piece in its destination.');
        break;
    case 'rook':
        console.log('It moves straight, the squares must be free. It captures by replacing the contrary in its destination.');
        break;
    case 'queen':
        console.log('It moves in any direction, without pulling. It captures by replacing the contrary in its destination.');
        break;
    case 'king':
        console.log('It moves one square at a time. If killed, the game ends.');
        break;
    default:
        console.log('The piece does not belong to chess game.')
}


///////////////////////////////////////////////////////////////////////////////
// Exercício 7: Porcentagem, nota, e conceito.
let nota = -110;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota < 90) {
    console.log("B");
} else if (nota >= 70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >= 50 && nota < 60) {
    console.log("E");
} else if(nota < 50 && nota >=0) {
    console.log('F');
} else {
    console.log("Nota fora do padrão!");
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 8: verificar que ao menos uma variável é par.
let x = 2;
let y = 3;
let z = 5;
if (x % 2 == 0 || y % 2 == 0 || z % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 9: verificar que ao menos uma variável é ímpar.
if (x % 2 !== 0 || y % 2 !== 0 || z % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 10: Verificação do lucro.
let custo = 10;
let valor = 25;
let lucro = 1000 * (valor - (custo * (1 + 0.2)))

if(lucro < 0) {
    console.log('Lucro não pode ser negativo!');
} else {
    console.log(lucro);
}

///////////////////////////////////////////////////////////////////////////////
// Exercício 11: 
let salBruto = 3000;
let salBase;

if(salBruto > 0 && salBruto <= 1556.94) {
    INSS = 0.08
    salBase = salBruto * (1 - INSS);
} else if(salBruto > 1556.94 && salBruto <= 2594.92) {
    INSS = 0.09
    salBase = salBruto * (1 - INSS);
} else if(salBruto > 2594.92 && salBruto <= 5189.82) {
    INSS = 0.11
    salBase = salBruto * (1 - INSS);
} else {
    INSS = 570,88
    salBase = salBruto - INSS
}

let salLiquido;
if(salBase > 0 && salBase <= 1903.98) {
    IR = 0
    salLiquido = salBase
} else if(salBase > 1903.98 && salBase <= 2826.65) {
    IR = 0.075
    salLiquido = salBase * (1 - IR) + 142.8
} else if(salBase > 2826.65 && salBase <= 3751.05) {
    IR = 0.15
    salLiquido = salBase * (1 - IR) + 354.8
} else if(salBase > 3751.05 && salBase <= 4664.68) {
    IR = 0.225
    salLiquido = salBase * (1 - IR) + 636.13
} else {
    IR = 0.275
    salLiquido = salBase * (1 - IR) + 869.36
}

console.log(INSS);
console.log(IR);
console.log(salLiquido);


