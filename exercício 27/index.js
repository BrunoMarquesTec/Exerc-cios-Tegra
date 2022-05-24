
function clicar(str){

    var str = document.getElementById('num1').value;
   
    var resp = document.getElementById('resposta');

    for(var i = 0; i < str.length / 2; i++)
     if (str[i] != str[str.length - i - 1]){
            resp.innerHTML = 'Não é Palindroma'
    }else{
        resp.innerHTML = 'É palindroma'
    }


}