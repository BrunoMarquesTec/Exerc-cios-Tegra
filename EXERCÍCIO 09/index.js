
function clicar() {


    var valorA = document.querySelector('.segundos1').value;
    var valorB = document.querySelector('.segundos2').value;
    var valorC = document.querySelector('.segundos3').value;

     const dateObj = new Date(valorA * 1000);
      hours = dateObj.getUTCHours();
      minutes = dateObj.getUTCMinutes();
      seconds = dateObj.getSeconds();

     const timeString1 = hours.toString().padStart(2, '0')
          + ':' + minutes.toString().padStart(2, '0')
          + ':' + seconds.toString().padStart(2, '0');

  

  document.querySelector('.hora1').innerHTML
  = timeString1



  const dateObj2 = new Date(valorB * 1000);
  hours = dateObj2.getUTCHours();
  minutes = dateObj2.getUTCMinutes();
  seconds = dateObj2.getSeconds();

 const timeString2 = hours.toString().padStart(2, '0')
      + ':' + minutes.toString().padStart(2, '0')
      + ':' + seconds.toString().padStart(2, '0');



document.querySelector('.hora2').innerHTML
= timeString2
     



const dateObj3 = new Date(valorC * 1000);
hours = dateObj3.getUTCHours();
minutes = dateObj3.getUTCMinutes();
seconds = dateObj3.getSeconds();

const timeString3 = hours.toString().padStart(2, '0')
    + ':' + minutes.toString().padStart(2, '0')
    + ':' + seconds.toString().padStart(2, '0');



document.querySelector('.hora3').innerHTML
= timeString3
   
         
    
    
}