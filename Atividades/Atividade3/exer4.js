function calcularTroco(valorCompra, pagamento) {
    return pagamento - valorCompra;
}

console.log('O troco é: R$ ' + calcularTroco(10, 20).toFixed(2) + '.');