document.getElementById("submit").addEventListener("click", biggest);

function biggest() {
    let x = document.forms["form"]["wartosci"].value;
    let y = x.split('').map(Number);
    let tab = [];
   
    let biggest = Math.max(...y);
    console.log(biggest);
    document.getElementById("rewartosci").innerHTML = biggest; 
  }






