
function clicar() {
    var km = document.querySelector('.distancia').value;
    var gasolina = document.querySelector('.combustivel').value;

    const consumoMedio = parseFloat(km) / (gasolina)

    document.querySelector('.kilometros').innerHTML = 'Distância percorrida: ' + km
    document.querySelector('.petroleo').innerHTML = 'Combustível gasto: ' + gasolina
    document.querySelector('.consumo').innerHTML = 'Consumo médio é de: ' + consumoMedio.toFixed(3) + ' km por litro.'
}