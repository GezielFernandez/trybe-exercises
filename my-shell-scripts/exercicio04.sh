#!/bin/bash

#######################################################
#Pergunta 4:
FILE="/home/geziel/ShellScript/exercicios1-5.sh"
if [ -e $FILE ]
    then
        echo "O caminho $FILE está habilitado"
fi

if [ -w $FILE ]
    then
        echo "Você tem permissão para editar $FILE"
    else
        echo "VocÊ NÃO foi autorizado a editar $FILE"
fi

#######################################################