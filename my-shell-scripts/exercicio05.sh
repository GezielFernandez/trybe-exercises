#!/bin/bash

#Pergunta 5
echo "Escreva o caminho do arquivo/diretório"
read ARCHIVO
if [ -f $ARCHIVO ]
    then
        echo "$ARCHIVO é um arquivo comum"
elif [ -d $ARCHIVO ]
    then
        echo "$ARCHIVO é um diretório"
else
    echo "$ARCHIVO é alguma outra coisa"
fi

ls -l $ARCHIVO