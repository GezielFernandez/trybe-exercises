//Ex. 01: Função que verifica se é palíndromo ou não
function verificaPalindromo(str) {
  let reversed = str.split('').reverse().join('')
  if(str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('pape'));

