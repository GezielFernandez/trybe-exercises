#!/bin/bash

# Site dos seguintes exemplos: https://www.youtube.com/watch?v=LJ14aJNHe_g&list=PLOHcYxJYJhjj6m1cyVchsxCKglqASPSzx&index=6
#Bônus 1
# echo "  >>>Hack a News<<<"
# echo "      Minhas habilidades!"
# for TECNICA in Hadouken Leigan Kamehameha 'Final Flash';
# do
#     echo "Eu sei dançar" $TECNICA
#     sleep 1
# done

#Bônus 2
# echo "  >>>Hack a News<<<"
# echo "      Sequência Simples"
# for N in {1..7}
# do 
#     echo "Número" $N
#     sleep 1
# done


#Bônus 3
echo "  >>>Hack a News<<<"
echo "      Teste PING em sites"
for SITE in $(cat lista.txt);
do
    echo
    echo "Pingando site" $SITE
    ping -w1 -c1 $SITE
    sleep 1
done