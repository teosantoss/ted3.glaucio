function calcularTotal(precoUnitario, quantidade) {
    if (typeof precoUnitario !== 'number' || typeof quantidade !== 'number' || quantidade < 0) {
        throw new Error('Preço unitário e quantidade devem ser números positivos.');
    }
    return precoUnitario * quantidade;
}
function aplicarDesconto(valorTotal) {
    if (typeof valorTotal !== 'number' || valorTotal < 0) {
        throw new Error('Valor total deve ser um número positivo.');
    }
    
    if (valorTotal > 100) {
        return valorTotal * 0.9;
    } mais {
        return valorTotal;
    }
}
tentar {
    const preco = 25.50;
    Const qtd = 5;
    const total = calcularTotal(preco, qtd);
    console.log(`Valor total: R$ ${total.toFixed(2)}`);
    
    const comDesconto = aplicarDesconto(total);
    console.log(`Valor com desconto: R$ ${comDesconto.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}