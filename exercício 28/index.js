function clicar(){

    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var n3 = parseFloat(document.getElementById('num3').value);
    var n4 = parseFloat(document.getElementById('num4').value);
    var n5 = parseFloat(document.getElementById('num5').value);
    var resp = document.getElementById('resposta');


    var arr = [n1, n2, n3, n4, n5]

    var min = Math.min(...arr);
    var max = Math.max(...arr);

    resp.innerHTML = 'O menor e o maior valor são :' + ' ' + min + ' ' + 'e' + ' ' + max
}