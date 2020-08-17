#!/bin/bash

#Bônus 2
#Pergunta 6:
ARCHIVOS=$@

for ARCHIVO in $ARCHIVOS
do
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

done