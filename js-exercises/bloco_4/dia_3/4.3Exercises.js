//////////////////////////////////////////////////////////////
// Exercício 01: Imprimir um quadrado de asteriscos de dimensão n * n

let n = 5;
let ast = "";

for(i = 0; i < n; i += 1) {
    ast += "*";
}
for(i = 0; i < n; i += 1) {
  console.log(ast);
}

//////////////////////////////////////////////////////////////
// Exercício 02: Triângulo retângulo com 5 asteriscos de base
let n = 5;
let ast = "";

for(i = 0; i < n; i += 1) {
  ast += "*";
  console.log(ast);
}

//////////////////////////////////////////////////////////////
// Exercício 03: Invertindo o lado do triângulo (a proposal)
let n = 5;
let spaces = '';
let ast = '';

for(i = 0; i < n; i += 1) {
  spaces += " ";  //Here we've got to let an space, kind of a phantom string!!
  ast += '*';
}

for(i = 1; i <= n; i += 1) {
  let spaceAst = spaces.slice(i) + ast.slice(n - i);  //Why wouldn't I use slice?
  console.log(spaceAst);
}

//////////////////////////////////////////////////////////////
// Exercício 04:


//////////////////////////////////////////////////////////////
// Exercício 05:


//////////////////////////////////////////////////////////////
// Exercício 06: Programa que avalia se o número é primo ou não
// let xy = 5;
// let m = [];
// let primos = [];
// for(i = 0; i <= xy; i += 1) {
//   m.push(i);
//   if(i % m[i] == 0) {
//     primos.push(i);
//   }
// }

// console.log(primos);
