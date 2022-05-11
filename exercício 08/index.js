
function clicar() {

    var valorA = document.querySelector('.medidaA').value;
    var valorB = document.querySelector('.medidaB').value;
    var valorC = document.querySelector('.medidaC').value;


    const areaquadrado = parseFloat(valorA) * parseFloat(valorA)
    const areatriangulo = parseFloat(valorA * valorB)/2
    const areatrapezio = parseFloat(valorA) + parseFloat(valorB) 
    const trapeziofinal = (areatrapezio) * (valorC)
    const trapezioresultdo = (trapeziofinal)/2
    


    document.querySelector('.quadrado').innerHTML = 'ÁREA DO QUADRADADO = ' + areaquadrado.toFixed(4)
    document.querySelector('.triangulo').innerHTML = 'ÁREA DO TRIANGULO = ' + areatriangulo.toFixed(4)
    document.querySelector('.trapezio').innerHTML = ' ÁREA DO TRAPÉZIO = ' + trapezioresultdo.toFixed(4)
}