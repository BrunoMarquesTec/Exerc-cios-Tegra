
function clicar() {
    var escala = document.getElementById("dado1").value;
    var temperatura = document.getElementById("dado2").value;
    var resp = document.getElementById("resposta");
    

     const celsius = parseFloat(temperatura * 1.8) + parseInt(32);
     const fahre = parseFloat((temperatura - 32)/1.8).toFixed(2);

     
    if (escala == 'C'){
    escala = celsius
    resp.innerHTML = 'Temperatura equivalente em Fahrenheit: ' + escala
    }
    if (escala == 'F'){
    escala = fahre
    resp.innerHTML = 'Temperatura equivalente em Celsius:' + escala
    }
     
}
   
