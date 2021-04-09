document.getElementById("submit").addEventListener("click", fibo);

function oblicz(n) {
  if(n == 0) return 0;
  if(n == 1) return 1;
  return oblicz(n-1)+oblicz(n-2);
}
function fibo(){
let bym = document.forms["form"]["wartosci"].value;
let n = parseInt(bym);
  
let wynik = (oblicz(n));
console.log(wynik);
document.getElementById("rewartosci").innerHTML = wynik;
}

  


  






