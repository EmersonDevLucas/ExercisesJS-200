function verificarMedia (mediaFinal) {
    if (mediaFinal >= 7) {
        console.log("Você foi aprovado com a" + mediaFinal)
    } else if (mediaFinal => 5 && mediaFinal <= 6.9) {
        console.log ('Você está de recuperação com a nota' + mediaFinal)
    } else {
        console.log('Você está de recuperação com a nota' + mediaFinal)
    }
};

verificarMedia (8);
