// Ex. 01: Mensagem de boas-vindas
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda, ' + info.personagem);

//Ex. 02: Imprimir o objeto com a nova chave (recorrente)
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

console.log(info);

//Ex. 03: Mostrar todas as chaves do objeto
for(key in info) {
  console.log(key);
}

//Ex. 04: mostrar todos os valores das chaves
for(let i in info) {
  console.log(info[i]);
}

//EX. 05: Novo objeto
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let i in info && info2) {
  if(i == 'recorrente') {
    console.log('Ambos recorrentes')
  } else {
    console.log(info[i] + " e " + info2[i])
  }
}