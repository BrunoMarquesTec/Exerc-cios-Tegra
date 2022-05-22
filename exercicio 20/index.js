function clicar() {

    var ini = parseInt(document.getElementById("num1").value);
    var fim = document.getElementById("num2").value;
    const resp = document.getElementById('resposta');
  
    var i;

    var total = 0;
    
  for (i=ini; i<=fim; i++) { 
      total += i;
    }
    resp.innerHTML += 'Resultado : ' + total;
  }
  
  
    
   
   

