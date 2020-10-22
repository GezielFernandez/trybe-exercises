// Usamos uma arrow function, o que não é imprescindível, desde que tenhamos uma função com dois parâmetros. 

// const promise = new Promise((resolve, reject) => {

// });

// Simulação de uma situação de sucesso e erro
// Executar o programa algumas vezes.
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});