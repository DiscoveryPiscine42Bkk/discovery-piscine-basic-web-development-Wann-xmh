#!/bin/bash
 
    if [  ]
    then 
        echo "No arguments supplied"
        exit
    fi

 for i in $@
    do
    if [ $i ]
    then 
        mkdir "ex"$i""
    fi
 done