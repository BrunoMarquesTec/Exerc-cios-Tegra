
function clicar(){

    var dia = parseInt(document.getElementById("num1").value);
    var mes = parseInt(document.getElementById("num2").value);
    var resp = document.getElementById('resposta');

    
    if(dia>=21 && mes==03 || dia<=20 && mes==04){
        resp.innerHTML = 'Signo: Áries'
    }

    if(dia>=21 && mes==04 || dia<=20 && mes==05){
        resp.innerHTML = 'Signo: Touro'
    }

    if(dia>=21 && mes==05 || dia<=20 && mes==06){
        resp.innerHTML = 'Signo: Gêmios'
    }

    if(dia>=21 && mes==06 || dia<=22 && mes==07){
        resp.innerHTML = 'Signo: Câncer'
    }

    if(dia>=23 && mes==07 || dia<=22 && mes==08){
        resp.innerHTML = 'Signo: Leão'
    }

    if(dia>=23 && mes==08 || dia<=22 && mes==09){
        resp.innerHTML = 'Signo: Virgem'
    }

    if(dia>=23 && mes==09 || dia<=22 && mes==10){
        resp.innerHTML = 'Signo: Libra'
    }

    if(dia>=23 && mes==10 || dia<=21 && mes==11){
        resp.innerHTML = 'Signo: Escorpião'
    }

    if(dia>=22 && mes==11 || dia<=21 && mes==12){
        resp.innerHTML = 'Signo: Sagitário'
    }

    if(dia>=22 && mes==12 || dia<=20 && mes==01){
        resp.innerHTML = 'Signo: Capricórnio'
    }

    if(dia>=21 && mes==01 || dia<=18 && mes==02){
        resp.innerHTML = 'Signo: Aquário'
    }

    if(dia>=19 && mes==02 || dia<=20 && mes==03){
        resp.innerHTML = 'Signo: Peixes'
    }

}







