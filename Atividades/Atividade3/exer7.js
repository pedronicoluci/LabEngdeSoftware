function verificarResposta(quiz) {
    if (quiz.toLowerCase() == 'morcego')
        return 'Resposta correta!';
    else
        return 'Tente novamente!';
}

let quiz = prompt('Qual é o único mamífero capaz de voar?');

alert(verificarResposta(quiz));