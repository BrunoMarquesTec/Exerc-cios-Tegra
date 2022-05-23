
function clicar(){

    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var n3 = parseInt(document.getElementById('num3').value);
    var n4 = parseInt(document.getElementById('num4').value);
    var n5 = parseInt(document.getElementById('num5').value);
    var resp = document.getElementById('resposta');


    let numeros = [n1, n2, n3, n4, n5]

   const sorted = numeros.sort();

     resp.innerHTML = sorted



}