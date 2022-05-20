
function clicar() {

    var salario = document.getElementById('dado1').value;
    var resp = document.getElementById('resposta');
    var resp1 = document.getElementById('resposta1');
    var resp2 = document.getElementById('resposta2');

  const aumento2 = parseFloat(salario * 15)/100;
  const aumento3 = parseFloat(salario * 10)/100;
  const aumento4 = parseFloat(salario * 5)/100;


  if (salario == 999.00 || salario < 999.00){
    var porcentagem1 =  parseFloat(salario * 20)/100
    var total1 = parseFloat(porcentagem1) + parseFloat(salario)
      resp.innerHTML = 'Novo Salário = ' + total1.toFixed(2) 
      resp1.innerHTML = 'Aumento = ' + porcentagem1.toFixed(2)
      resp2.innerHTML = 'Porcentagem = 20%'
  }

  if (salario >= 1000.00 || salario <= 2999.00){
    var porcentagem2 =  parseFloat(salario * 15)/100
    var total2 = parseFloat(porcentagem2) + parseFloat(salario)
      resp.innerHTML = 'Novo Salário = ' + total2.toFixed(2) 
      resp1.innerHTML = 'Aumento = ' + porcentagem2.toFixed(2)
      resp2.innerHTML = 'Porcentagem = 15%'
  }

  if(salario >= 3000.00 || salario <= 7999.00){
    var porcentagem3 =  parseFloat(salario * 10)/100
    var total3 = parseFloat(porcentagem3) + parseFloat(salario)
      resp.innerHTML = 'Novo Salário = ' + total3.toFixed(2) 
      resp1.innerHTML = 'Aumento = ' + porcentagem3.toFixed(2)
      resp2.innerHTML = 'Porcentagem = 10%'
  }

   if(salario > 8000.00){
    var porcentagem4 =  parseFloat(salario * 5)/100
    var total4 = parseFloat(porcentagem4) + parseFloat(salario)
      resp.innerHTML = 'Novo Salário = ' + total4.toFixed(2) 
      resp1.innerHTML = 'Aumento = ' + porcentagem4.toFixed(2)
      resp2.innerHTML = 'Porcentagem = 05%'
   }

}
