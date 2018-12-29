function validoFormen3() {

 var emri, nrSez, nrEp;

 emri = document.getElementById("emriSer");
 nrSez = document.getElementById("nrSez");
 nrEp = document.getElementById("nrEp");

 try {
   if(emri.value == ""){
   throw "Nuk keni dhene emrin e serialit";
  }

  if(nrSez.value == ""){
   throw "Ju lutemi shkruani numrin e sezonave te serialit";
  }

  if(nrEp.value == ""){
    throw "Ju lutemi shkruani numrin e episodit te serialit";
  }

  document.getElementById("formaSugjero").submit();

}
  catch (error) {
   alert(error);
 }

}
