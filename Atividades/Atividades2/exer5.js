let notas = [10, 10, 10, 10];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Média = " + media)

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}