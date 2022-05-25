
 function clicar(cnpj) {

    var cnpj = document.getElementById('num1').value;
    var resp = document.getElementById('resposta');
          
         let numeros = cnpj.split('-')[0].replace(/[.|\/]/g, '');
         let digitos = cnpj.split('-')[1];     
        
         if(primeiroDigito(numeros) != digitos[0]){
            resp.innerHTML = 'CNPJ('+cnpj+') - Inválido'
             }

             if(segundoDigito(numeros+''+digitos[0]) != digitos[1]){
                resp.innerHTML = 'CNPJ('+cnpj+') - Inválido'
                 }
               else{
                 resp.innerHTML = 'CNPJ('+cnpj+') - Valido'
               }

        }
           function primeiroDigito (numeros){ 
        let peso = 2
        let resultado = 0
        for (let i = numeros.length-1; i>=0; i--){
            resultado += numeros[i] * peso;
            peso = (peso == 9 ? 2: peso+1);
        }
        modulo = resultado % 11;
        resultado = (modulo < 2 ? 0 : 11 - modulo)
        return resultado;
        }
        
        function segundoDigito (numeros){
            let peso = 2
        let resultado = 0
        for (let i = numeros.length-1; i>=0; i--){
            resultado += numeros[i] * peso;
            peso = (peso == 9 ? 2: peso+1);
        }
        modulo = resultado % 11;
        resultado = (modulo < 2 ? 0 : 11 - modulo)
        return resultado;
        }
   