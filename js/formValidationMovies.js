function validoFormen1() {
  var inputi, passwordi;

  inputi = document.forms["forma1"]["username1"].value;

    if(inputi === ""){
      window.alert("Hyrja eshte bosh!");
      return false;
    }

    if (inputi.charAt(0) === " ") {
      window.alert("Hyrja nuk ben qe te filloje me karakter bosh!");
      return false;
    }

  passwordi =  document.forms["forma1"]["password1"].value;

  if(passwordi === ""){
    window.alert("Fjalekalimi eshte bosh!");
    return false;
  }

  if (passwordi.charAt(0) === " ") {
    window.alert("Fjalekalimi nuk ben qe te filloje me karakter bosh!");
    return false;
  }

  if (passwordi.length < 8) {
    window.alert("Fjalekalmi duhet te jete me 8 ose me shume karaktere!");
    return false;
  }

}

function validoFormen2() {
  var inputi, passwordi, passwordiKonfirmues;

  inputi = document.forms["forma2"]["username2"].value;

  if(inputi === ""){
    window.alert("Hyrja eshte bosh!");
    return false;
  }

  if (inputi.charAt(0) === " ") {
    window.alert("Hyrja nuk ben qe te filloje me karakter bosh!");
    return false;
  }

  passwordi =  document.forms["forma2"]["password2"].value;
  passwordiKonfirmues = document.forms["forma2"]["password21"].value;

  if(passwordi === ""){
      window.alert("Fjalekalimi eshte bosh!");
      return false;
    }

  if (passwordi.charAt(0) === " ") {
    window.alert("Fjalekalimi nuk ben qe te filloje me karakter bosh!");
    return false;
  }

  if (passwordi.length < 8) {
    window.alert("Fjalekalimi duhet te jete me 8 ose me shume karaktere!");
    return false;
  }

  if (passwordi !== passwordiKonfirmues) {
    window.alert("Fjalekalimet duhet te perputhen!");
    return false;
  }

}
