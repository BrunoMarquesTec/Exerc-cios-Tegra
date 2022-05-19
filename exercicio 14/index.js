
function clicar() {

    var preco = document.getElementById('num1').value;
    var quantidade = document.getElementById('num2').value;
    var dinheiro = document.getElementById('num3').value;
    var resultado = document.getElementById('result');

    var valortotal = parseFloat(preco) * parseInt(quantidade)

    var troco = dinheiro - valortotal
    if(dinheiro>valortotal){
        resultado.innerHTML = 'TROCO: ' + troco.toFixed(2) + 'Reais'
    }
    else{
        var faltando = valortotal - dinheiro
        resultado.innerHTML = 'Dinheiro insuficiente. Faltam ' + faltando.toFixed(2) + 'Reais'
    }
}