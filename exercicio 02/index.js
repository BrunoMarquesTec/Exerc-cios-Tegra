



function clicar() {

    var base = document.querySelector('.base').value;
    var altura = document.querySelector('.altura').value;

 const area = (base) * (altura)
 const perimetro = parseFloat(base) + parseFloat(base) + parseFloat(altura) + parseFloat(altura)
 const somaquadrados = parseFloat(base*base + altura*altura)
 const diagonal = Math.sqrt(somaquadrados)

 document.querySelector('.alturaresultado').innerHTML = 'Altura do Retângulo = ' + altura
 document.querySelector('.baseresultado').innerHTML = 'Base do Retângulo = ' + base
 document.querySelector('.area').innerHTML = 'Área do Retângulo = ' + area.toFixed(4)
 document.querySelector('.perimetro').innerHTML = 'Perímetro do Retângulo = ' + perimetro.toFixed(4)
 document.querySelector('.diagonal').innerHTML = 'Diagonal = ' + diagonal.toFixed(4)
}