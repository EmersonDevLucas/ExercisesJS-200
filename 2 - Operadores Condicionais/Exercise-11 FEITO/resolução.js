let idade = 71

if (idade >= 18 && idade <= 70) {
    console.log ('Voto Obrigatório')
} else if (idade < 18 && idade >= 16 || idade > 70) {
    console.log('Voto Facultativo')
} else {    
    console.log('Não pode votar')
}