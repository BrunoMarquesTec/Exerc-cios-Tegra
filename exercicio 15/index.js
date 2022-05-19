
function clicar() {

    var glicose = document.getElementById('num1').value;
    var total = document.getElementById('result');

   
    
    
    if(glicose<=100){
        total.innerHTML = 'Classificação: Normal' 
    }
    else{
        total.innerHTML = 'Classificação: Elevado'
    }
    if(glicose>140){
        total.innerHTML = 'Classificação: Diabetes'
    }
    

}