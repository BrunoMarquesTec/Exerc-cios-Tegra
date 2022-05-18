
function clicar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    var nota = parseFloat(num1 + num2).toFixed(2)
    
    if (nota >= 60) {
    document.getElementById('status').innerHTML ='APROVADO'
    }
    else {
        document.getElementById('status').innerHTML = 'REPROVADO'
    }

     document.getElementById('nota').innerHTML = 'NOTA FINAL = ' + nota
   
    
}