function hapeMenune() {
var linqet = document.getElementsByClassName('linqet');
var a = document.getElementById("a");
//var navbar = document.getElementById("navbar");

if(a.backgroundColor !="black") {
  a.style.backgroundColor = "black";
}


for (var i = 0; i < linqet.length; i++) {
    if(linqet[i].style.display === "none") {
      linqet[i].style.display ="inline-block";
    }
    else {
      linqet[i].style.display ="none";
      a.style.backgroundColor = "inherit";

    }
} //end for

}
