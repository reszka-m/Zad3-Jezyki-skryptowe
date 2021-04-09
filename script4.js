document.getElementById("submit").addEventListener("click", fibo);

function nwd(a,b){
  do{
  if(a!=b){
    if(a>b){
      a = a-b;
    }
    else{
      b = b-a;
    }
  }
  else{return a;} 
}while(a!=b)
return a;
}

function fibo(){
let p = document.forms["form"]["pierwsza"].value;
let d = document.forms["form"]["druga"].value;
let pierwsza = parseInt(p);
let druga = parseInt(d);
 
let wynik = nwd(pierwsza,druga);
console.log(wynik);
document.getElementById("rewartosci").innerHTML = wynik;
}

  


  






