
function clicar(){

    var n = document.getElementById("num1").value;
    var resp = document.getElementById('resposta');
     
     var i;

     for(i=1; i<=10; i++){
         resp.innerHTML += n + ' ' + 'x' + ' ' + ' ' + i + ' ' + '=' + ' ' + (n*i) + '<br>'
     }
}