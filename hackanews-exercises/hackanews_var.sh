#!/bin/bash

#1eiro exemplo
echo "Digite a sua idade:"
read IDADE 
echo "Eu tenho" $IDADE "anos de idade"

#2do exemplo
VARIAVEL='Geziel'
echo $VARIAVEL

VARIAVEL=whoami 
echo $VARIAVEL

VARIAVEL="Eu sou um usuário"
echo $VARIAVEL

VARIAVEL="Eu estou logado como usuário 'whoami'"
echo $VARIAVEL

VARIAVEL="Eu estou logado como usuário whoami"
echo $VARIAVEL