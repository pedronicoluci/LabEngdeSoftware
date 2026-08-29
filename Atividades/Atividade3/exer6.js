calcularJuros = (valor_inicial, taxa, periodo) => valor_inicial * (1 + taxa / 100) ** periodo;

console.log('O valor total após este período é de: R$' + calcularJuros(10000, 2, 1).toFixed(2));