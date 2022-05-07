
function clicar() {
    var funcionario = document.querySelector('.nome').value;
    var dinheirohora = document.querySelector('.valorhora').value;
    var trabalho = document.querySelector('.horastrabalhadas').value;

    const SalarioFinal = parseFloat(dinheirohora) * parseFloat(trabalho)

    document.querySelector('.pessoa').innerHTML = 'Nome: ' + funcionario
    document.querySelector('.salariohora').innerHTML = 'Valor por hora: ' + dinheirohora
    document.querySelector('.tempotrabalho').innerHTML = 'Horas Trabalhadas: ' + trabalho
    document.querySelector('.pagamento').innerHTML = funcionario + ' deve receber o total de: ' + SalarioFinal.toFixed(2) + ' Reais'
    
}