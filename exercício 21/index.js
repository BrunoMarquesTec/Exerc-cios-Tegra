function clicar() {

    var x = document.getElementById('num1').value;
    var resp = document.getElementById('resposta');
    
    let var1 = 1;
    let i = var1;

    for(i>=var1; i<=x; i++){
         if(i%2==0){
             resp.innerHTML += i + '<br>';
         }
    }
    
}