
function clicar(){

    var str = document.getElementById('num1').value;
    var resp = document.getElementById('resposta');
    var resp2 = document.getElementById('resposta2');

    var vog = 0;
    var con = 0;
    var ref = "aeiouAEIOU";
    
    for (var i = 0; i < str.length; i++) {
        if ((str.charAt(i) >= 'A'
                 && str.charAt(i) <= 'Z')
                || (str.charAt(i) >= 'a'
                    && str.charAt(i) <= 'z')) {
                if (ref.indexOf(str.charAt(i)) != -1)
                    vog++;
                else
                    con++;
            }
        }
        resp.innerHTML = 'Vogais = ' + vog + '<br>' + 'Consoantes = ' + con 
}



