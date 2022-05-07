
function clicar() {
    var name1 = document.querySelector('.nome1').value;
    var age1 = document.querySelector('.idade1').value;
    var name2 = document.querySelector('.nome2').value;
    var age2 = document.querySelector('.idade2').value;

    const mediaidade = parseInt(age1) + parseInt(age2)
    const resultado  = parseFloat(mediaidade)/2


 document.querySelector('.pessoa1').innerHTML = 'Pessoa 1: ' + name1
 document.querySelector('.numero1').innerHTML = 'Idade 1: ' + age1
 document.querySelector('.pessoa2').innerHTML = 'Pessoa 2: ' + name2
 document.querySelector('.numero2').innerHTML = 'Idade 2: ' + age2
 document.querySelector('.media').innerHTML = 'A idade média de ' + name1 + ' e ' + name2 + ' é de ' + resultado.toFixed(1) +' anos'
}