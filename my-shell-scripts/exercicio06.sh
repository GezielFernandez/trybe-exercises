#!/bin/bash

#Pergunta 6:
ARCHIVO=$1
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