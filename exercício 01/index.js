

var ValorMetro = 480


const clicar  = () => {
    var comprimento = document.querySelector('.comprimento').value;
    var largura = document.querySelector('.largura').value;
    
    var areaTerreno = (comprimento) * (largura)
    var resultado = (comprimento) * (largura) * (ValorMetro) 

    document.querySelector('.resultado').innerHTML = 'O Preço do Terreno é de:' +  'R$' + resultado.toFixed(2) 

        var metragem = (comprimento) * (largura) 
     document.querySelector('.tamanho').innerHTML = 'Metragem Total do Terreno:' +  metragem.toFixed(2)
     
       
     
    
    
    
}
