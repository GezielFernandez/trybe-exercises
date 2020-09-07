#!/bin/bash


#Pergunta 7:
DIRETORIO=$1

if [ -d $1 ]
    then
        FILES=`ls -l $DIRETORIO | wc -l`    #Aqui ele vai contar um arquivo a mais, duas soluções possíveis, ou somente ls, ou ls -1.
        echo "O $1 tem $FILES arquivos"
else
    echo "O argumento $1 não é um diretório"

fi