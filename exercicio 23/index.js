
function clicar(){

    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var resp = document.getElementById('resposta');
   
        var i, soma = 0;

        for( i=n1; i<n2; i++){
            if(i % 2 != 0) { soma += i }
        }
        resp.innerHTML += soma
    }
    
   

