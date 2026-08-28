function verificarAprovacao(nota) {
    if (nota >= 7)
        return 'Aprovado!';
    else
        return 'Reprovado!';
}

console.log(verificarAprovacao(6));