
function clicar() {
    var dist1 = document.getElementById('num1').value;
    var dist2 = document.getElementById('num2').value;
    var dist3 = document.getElementById('num3').value;


    var maior = dist1
    if(dist2 > maior)
    maior = dist2;
    if(dist3 > maior)
    maior = dist3;
    

    
        


    document.getElementById('result').innerHTML = 'Maior Distância = ' + maior

    
}