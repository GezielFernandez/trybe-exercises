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


//Ex. 02: Array de inteiros e retornar o índice de maior valor
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

//Ex. 03: Array de inteiros e retornar o índice de MENOR valor
let array = [2, 4, 6, 7, 10, 0, -3];
function maximus(array) {
  // console.log(Math.max.apply(Math, array));
  for(i in array) {
    if(array[i] == Math.min.apply(Math, array)) {
      console.log(i);
    }
  }
}
maximus(array);

//Ex. 04: Retornar o nome com mais caracteres de um array.
//... em processo
function biggerWord(arrayOfWords) {
  let biggerWord = words[0];
  for(i in words) {
    if(biggerWord.lenght < words[i].lenght) {
      biggerWord = words[i];
    }
  }
}

let arrayOfWords = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(arrayOfWords[3].length);
console.log(Math.max.apply(Math, arrayOfWords));


let arrayOfWords = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
for(i in arrayOfWords) {
  if(i < arrayOfWords[i].length) {
    console.log(false);
  } else {
    console.log(i);
  }
}

