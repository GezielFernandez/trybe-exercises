//Ex. 01: Função que verifica se é palíndromo ou não
let str = 'pum'
function verificaPalindromo(str) {
  let reversed = str.split('').reverse().join('')
  if(str === reversed) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verificaPalindromo(str);


//EX. 02: Array de inteiros e retornar o índice de maior valor
let array = [2, 3, 6, 7, 10, 1];
function maximus(array) {
  // console.log(Math.max.apply(Math, array));
  for(i in array) {
    if(array[i] == Math.max.apply(Math, array)) {
      console.log(i);
    }
  }
}
maximus(array);

