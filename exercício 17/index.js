
function clicar() {

    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var resposta = document.getElementById('result');

    if(n1>n2 || n1 == n2) {
        var resultado = n1/n2;
        if(Number.isInteger(resultado)){
          resposta.innerHTML = 'Os números são múltiplos';
        
    }else {
        var resultado = n2/n1;
        if(Number.isInteger(resultado)){
          resposta.innerHTML = 'Os números são múltiplos';
        }else{
          resposta.innerHTML = 'Os números não são múltiplos';
        };
}}}