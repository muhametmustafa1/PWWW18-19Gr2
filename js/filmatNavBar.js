function hapeMenune() {
var linqet = document.getElementsByClassName('linqet');

for (var i = 0; i < linqet.length; i++) {
    if(linqet[i].style.display === "none") {
      linqet[i].style.display ="inline-block";
    }
    else {
      linqet[i].style.display ="none";
    }
} //end for

}
