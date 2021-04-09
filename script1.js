function validateForm() {
    let x = document.forms["form"]["fname"].value;
    let y = document.forms["form"]["lname"].value;
    let z = document.forms["form"]["mail"].value;
    let emvali = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
    if (firstBigLetter(x) & firstBigLetter(y) & emvali.test(z)) {
      alert("imie: " + x + " nazwisko: " + y + " emial: " + z);
      return true;
    }
    else{
        alert("Pierwsze litery nie są wielkie lub wprowadzny email jest niepoprwany!")
        return false;
    }
  }

function firstBigLetter(string){
    if(string.charAt(0) == string.charAt(0).toUpperCase()){
        return true;
    }
}


