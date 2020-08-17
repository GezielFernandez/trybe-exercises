#!/bin/bash

echo "Qual é o seu nome?"
read NOME
echo "Meu nome é $NOME"

#outra forma
read -p "Qual é o seu nome? " NOME
echo "Muito prazer, $NOME"

#parâmetros
echo "Esses são meus parâmetros, $1, $2 e $3"

#parâmetros, outro exemplo
echo "Esses são meus parâmetros, $*"


#Condicionais
read -p "Qual a sua idade? " IDADE

if [ $IDADE -lt 18 ]    #lt é less than
then
    echo "Você é menor de idade"
else
    echo "Você pode beber!"
fi

#Para adicionar conectores lógicos...
#if [ $IDADE -lt 18 ] && [ ... ]    --> e
#if [ $IDADE -lt 18 ] || [ ... ]    --> ou

#Para comentar várias linhas ao mesmo tempo usar...
#Ctrl + /       --> Atenção, NÃO É o diagonal que está do lado do Num Lock!!!


#Bônus
TAREFAS="viajar votar beber sair trabalhar"

read -p "Qual a sua idade? " IDADE
if [ $IDADE -lt 18 ]    #lt é less than
then
    echo "Você é menor de idade"
else
    for ITEM in $TAREFAS
    do
        echo "Agora você já pode $ITEM sem se preocupar"
    done
fi

