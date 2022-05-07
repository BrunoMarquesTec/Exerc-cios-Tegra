
function clicar() {

    var preco1 = document.querySelector('.preco').value;
    var quantidade1 = document.querySelector('.quantidade').value;
    var dinheiro = document.querySelector('.valorrecebido').value;

    const TotalPagar = parseFloat(preco1) * parseFloat(quantidade1)
    const Troco = parseFloat(dinheiro) - parseFloat(TotalPagar)

    document.querySelector('.precounidade').innerHTML = 'Valor Unitário = ' + preco1
    document.querySelector('.quantidadetotal').innerHTML = 'Quantidade do Produto = ' + quantidade1
    document.querySelector('.recebido').innerHTML = 'Valor Pago = ' + dinheiro
    document.querySelector('.totalcompra').innerHTML = 'Valor a pagar = ' + TotalPagar
    document.querySelector('.troco').innerHTML = 'Troco = ' + Troco.toFixed(2)
}