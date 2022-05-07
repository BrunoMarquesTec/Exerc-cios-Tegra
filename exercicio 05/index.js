

function clicar() {
    var pegarraio = document.querySelector('.raiocirculo').value;

    const pi = 3.14159

    const areacirculo = parseFloat(pi) * parseFloat(pegarraio*pegarraio)

    document.querySelector('.valorraio').innerHTML = 'O valor do raio do circulo é: ' + pegarraio
    document.querySelector('.resultado').innerHTML = 'Área: ' + areacirculo.toFixed(3)
}