
function clicar(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = parseFloat(document.getElementById("num3").value);
    ans = document.getElementById('resposta');

    var delta = (b*b) - 4*a*c;

    if (delta>0){
        raiz1 = (-b + Math.sqrt(delta) )/(2*a);
        raiz2 = (-b - Math.sqrt(delta) )/(2*a);

        ans.innerHTML = "X1: " + raiz1.toFixed(4) + "<br/>" +"X2: " + raiz2.toFixed(4);
       }else{
        if (delta==0){
         raiz = (-b + Math.sqrt(delta) )/(2*a);
         ans.innerHTML="Raiz dupla: " + raiz;
        }else{
         real = (-b)/(2*a);
         img1  = Math.sqrt(-delta)/(2*a);
         img2  = - Math.sqrt(-delta)/(2*a);

         if(real + img1 && real + img2 <0){
            document.getElementById('negativo').innerHTML = 'Esta equação não possui raízes reais'
        }
         else {
             ans.innerHTML = "X1: " + real + "+" + img1.toFixed(4)+"i"+"<br/>" +
             "X2: " + real + "+" + img2.toFixed(4)+"i"
         }
            
        }
       }

}