
function clicar() {

    var minutos1 = document.getElementById("num1").value;
    var minutos2 = document.getElementById("num2").value;
    const resp = document.getElementById('resposta');
    const resp1 =  document.getElementById('resposta1');

     const plano = 0.50
     const foraplano = 2.00

     var valor = 50.00
     if(minutos1<=100){
        resp.innerHTML = 'Valor a Pagar: ' + valor.toFixed(2)
     }
    else{
       var maior = (minutos1 - 100) * (foraplano) + valor
        resp.innerHTML = 'Valor a Pagar: ' + maior.toFixed(2)
    }

    
     if(minutos2<=100){
        resp1.innerHTML = 'Valor a Pagar: ' + valor.toFixed(2)
     }
    else{
       var maior1 = (minutos2 - 100) * (foraplano) + valor
        resp1.innerHTML = 'Valor a Pagar: ' + maior1.toFixed(2)
    }
    
     
}