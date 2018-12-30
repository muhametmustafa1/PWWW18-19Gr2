var d = new Date();
var oret = d.getHours();
var intro = document.getElementById("intro");

//Nese eshte mengjes deri ne ora 10 le te qendroje si eshte!!

if(oret > 10 && oret <19) {
  intro.style.backgroundColor= "#065F18"; //gjelber e mbyllur
}
if (oret >=19 && oret < 24) {
  intro.style.backgroundColor = "#06245F" //kalter e mbyllur

}
