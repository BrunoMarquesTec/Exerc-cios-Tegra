


function clicar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var menor = num1;

    if(num2 < menor)
     menor = num2;
    if(num3 < menor)
     menor = num3;

    document.getElementById('result').innerHTML = 'MENOR = ' + menor
   }