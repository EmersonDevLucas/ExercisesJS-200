function vernum (num) {
    if (num == 0) {
        console.log(`valor de ${num} é igual a 0`)
    } else if (num > 0) {
        console.log(`valor de ${num} é igual a 1`)
    } else {
        console.log(`valor de ${num} é menor de que 0`)
    }

}

vernum('-1');
vernum('0');
vernum('1');